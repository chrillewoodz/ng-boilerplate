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

  @Output() loaded: EventEmitter<any> = new EventEmitter<any>();

  public img: HTMLImageElement;

  private _url: string;

  @HostBinding('class.background-loaded')
  isLoaded = false;

  createImage(url: string): void {

    this._url = url;

    this.img = new Image();

    this.img.onload = () => {
      this.isLoaded = true;
      this.loaded.emit(url);
    };

    this.img.src = url;
  }
}
