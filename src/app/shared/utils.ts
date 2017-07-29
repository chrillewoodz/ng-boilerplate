import * as _ from 'lodash';

export function IsDefined(val: any): boolean {
  return val !== undefined && val !== null;
};

export function GetUniqueID(): string {

  let d = Date.now();

  if (window.performance && typeof window.performance.now === 'function') {
    d += performance.now();
  }

  const id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {

    const r = (d + Math.random() * 16) % 16 | 0;

    d = Math.floor(d/16);

    return (c == 'x' ? r : (r&0x3|0x8)).toString(16);
  });

  return id;
};

export function GetSortedList(list: any[], key: string): any[] {

  return _.sortBy(list, (o) => {
    return o[key];
  });
};

export function FindObjectByQuery(list: any[], key: string, query: string, isCaseSensitive = false): any {

  return _.find(list, (item) => {

    if (!isCaseSensitive) {
      return String(item[key]).toLowerCase() === String(query).toLowerCase();
    }

    return item[key] === query;
  });
};

export function FindObjectIndex(list: any[], obj: any, key: string, isCaseSensitive = false): number {

  return _.findIndex(list, (item) => {

    if (!isCaseSensitive) {
      return String(obj[key]).toLowerCase() === String(item[key]).toLowerCase();
    }

    return obj[key] === item[key];
  });
};
