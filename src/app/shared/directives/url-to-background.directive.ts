import {Directive, HostBinding, Input} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Directive({
  selector: '[urlToBackground]'
})

export class UrlToBackgroundDirective {
  @Input() set url(value) {
    this.setUrl(value);
  }

  get url() {
    return this._url;
  }

  constructor(private sanitizer: DomSanitizer) {}

  private _url: string;

  @HostBinding('style.background-image')
  background: any;

  setUrl(url: string): void {

    this._url = url;

    if (this.url) {
      this.background = this.sanitizer.bypassSecurityTrustStyle(`url(${this.url})`);
    }
    else {
      this.background = '';
    }
  }
}
