import {Directive, EventEmitter, HostBinding, Input, Output} from '@angular/core';

@Directive({
  selector: '[backgroundLoaded]'
})

/* Mimics an img (load) event by creating an image and checking it's onload event
 * Sets a loaded class as well as emits an event that can be bound with (load)
 */
export class BackgroundLoadedDirective {
  @Input() set url(value) {
    this.createImage(value);
  };

  get url() {
    return this._url;
  }

  @Output() load: EventEmitter<any> = new EventEmitter<any>();

  private _url: string;

  @HostBinding('class.background-loaded')
  isLoaded: boolean = false;

  createImage(url: string): void {

    let img = new Image();

    img.onload = () => {
      this.isLoaded = true;
      this.load.emit(url);
    };

    img.src = url;
  }
}
