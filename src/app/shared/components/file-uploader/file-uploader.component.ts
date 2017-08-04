import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output
} from '@angular/core';

import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

import {IData} from './shared/data.interface';
import {IFile} from './shared/file.interface';

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
  @Input() btnClasses = '';
  @Output() filesSelected: EventEmitter<IData> = new EventEmitter<IData>();

  set model(model) {
    this._model = model;
  }

  get model() {
    return this._model;
  }

  private _model: IFile[] = [];

  constructor() {}

  propagateChange = (_: any) => {};
  propagateTouched = () => {};

  registerOnChange(fn: (_: any) => {}) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: () => {}) {
    this.propagateTouched = fn;
  }

  writeValue<T extends IFile>(value: T[]) {

    if (value !== undefined && value !== null) {
      this.model = value;
    }
  }

  toggleFileInput(input: HTMLElement): void {
    input.click();
  }

  readFiles(e): void {

    // Don't start at 0 since we will be counting length of array which doesn't start at 0
    let completed = 1;

    const newFiles: IFile[] = [];

    for (const file of e.target.files) {

      const reader = new FileReader();

      reader.onload = (loaded: any) => {

        newFiles.push({src: loaded.target.result, type: file.type});

        if (e.target.files.length === completed) {

          // Emit this before the model is set so that we get the previous existing files
          this.filesSelected.emit({
            existingFiles: this.model,
            newFiles: newFiles,
            info: this.info
          });

          this.model = [...this.model, ...newFiles];

          this.propagateChange(this.model);
        }

        completed++;
      };

      reader.readAsDataURL(file);
    };
  }
}
