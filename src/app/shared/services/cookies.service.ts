import {Injectable} from '@angular/core';

@Injectable()

export class Cookies {

  public static getItem(sKey) {

    if (!sKey) {
      return null;
    }

    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
  }

  public static setItem(sKey?, sValue?, vEnd?, sPath?, sDomain?, bSecure?) {

    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
      return false;
    }

    let sExpires = '';

    if (vEnd) {

      switch (vEnd.constructor) {

        case Number:
          sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
          break;

        case String:
          sExpires = '; expires=' + vEnd;
          break;

        case Date:
          sExpires = '; expires=' + vEnd.toUTCString();
          break;
      }
    }

    document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");

    return true;
  }

  public static removeItem(sKey, sPath?, sDomain?) {

    if (!this.hasItem(sKey)) {
      return false;
    }

    document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");

    return true;
  }

  public static hasItem(sKey) {

    if (!sKey) {
      return false;
    }

    return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
  }

  public static keys() {

    let aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);

    for (let nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) {
      aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
    }

    return aKeys;
  }

}
