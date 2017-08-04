import {Directive, HostBinding, Input} from '@angular/core';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';

@Directive({
  selector: '[urlToBackground]'
})

export class UrlToBackgroundDirective {
  @Input('urlToBackground') set backgroundUrl(backgroundUrl) {
    this.setUrl(backgroundUrl);
  }

  get backgroundUrl() {
    return this._backgroundUrl;
  }

  private _backgroundUrl: string;

  @HostBinding('style.background-image')
  background: SafeStyle|string;

  constructor(private sanitizer: DomSanitizer) {}

  setUrl(backgroundUrl: string): void {

    this._backgroundUrl = backgroundUrl;

    if (this.backgroundUrl) {
      this.background = this.sanitizer.bypassSecurityTrustStyle(`url(${backgroundUrl})`);
    }
    else {
      this.background = '';
    }
  }
}
