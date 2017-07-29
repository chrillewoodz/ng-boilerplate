import {Injectable} from '@angular/core';

@Injectable()

export class Cookies {

  getItem(sKey): string {

    if (!sKey) {
      return null;
    }

    return decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null;
  }

  setItem(sKey?: string, sValue?: any, vEnd?: any, sPath?: string, sDomain?: string, bSecure?: boolean): void {

    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
      return;
    }

    let sExpires = '';

    if (vEnd) {

      switch (vEnd.constructor) {

        case Number:
          sExpires = vEnd === Infinity ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT' : `; max-age=${vEnd}`;
          break;

        case String:
          sExpires = '; expires=' + vEnd;
          break;

        case Date:
          sExpires = '; expires=' + vEnd.toUTCString();
          break;
      }
    }

    document.cookie = `${encodeURIComponent(sKey)}=${encodeURIComponent(sValue)}${sExpires}${(sDomain ? `; domain=${sDomain}` : '')}${sPath ? `; path=${sPath}` : ''}${bSecure ? '; secure' : ''}`;
  }

  removeItem(sKey, sPath?, sDomain?): void {

    if (!this.hasItem(sKey)) {
      return;
    }

    document.cookie = `${encodeURIComponent(sKey)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT${sDomain ? `; domain=${sDomain}` : ''}${sPath ? `; path=${sPath}` : ''}`;
  }

  hasItem(sKey): boolean {

    if (!sKey) {
      return;
    }

    return (new RegExp('(?:^|;\\s*)' + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=')).test(document.cookie);
  }

  keys(): string[] {

    const aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, '').split(/\s*(?:\=[^;]*)?;\s*/);
    const nLen = aKeys.length;

    for (let nIdx = 0; nIdx < nLen; nIdx++) {
      aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
    }

    return aKeys;
  }
}
