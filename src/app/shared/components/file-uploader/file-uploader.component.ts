import {ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
     provide: NG_VALUE_ACCESSOR,
     useExisting: forwardRef(() => FileUploaderComponent),
     multi: true
   }
  ]
})

export class FileUploaderComponent implements ControlValueAccessor {
  @Input() info = null;
  @Input() multiple = false;
  @Input() max = null;
  @Input() btnClasses = '';
  @Output() filesSelected: EventEmitter<any> = new EventEmitter<any>();

  public model: any[] = [];

  constructor() {}

  propagateChange = (_: any) => {};

  registerOnChange(fn: () => any) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  writeValue(value: any) {

    if (value !== undefined) {
      this.model = value;
    }
  }

  delete(): void {
    this.model = [];
    this.propagateChange(this.model);
  }

  /* Opens the file selection dialog
   *
   * @param {HTMLElement} input [the file input to activate]
   * @returns {Void}
   */
  toggleFileInput(input: HTMLElement): void {
    input.click();
  }

  /* Reads files added from a file input
   *
   * @param {Any} e [the event of the file adding, contains the files to be read]
   * @returns {Void}
   */
   readFiles(e: any): void {

     // Don't start at 0 since we will be counting length of array which doesn't start at 0
     let completed = 1;

     const newFiles: any[] = [];

     for (const file of e.target.files) {

       const reader = new FileReader();

       reader.onload = (loaded: any) => {

         newFiles.push({src: loaded.target.result, type: file.type});

         if (e.target.files.length === completed) {

           this.filesSelected.emit({
             existingFiles: this.model,
             newFiles: this.max === null ? newFiles : newFiles.slice(0, this.max),
             info: this.info
           });
         }

         completed++;
       };

       reader.readAsDataURL(file);
     };
   }
}
