import {Injectable} from '@angular/core';
import * as _ from 'lodash';

@Injectable()

export class SelectUtils {

  /* Returns a list with an item marked, the marking is based on whether the up or down key was pressed
   *
   * @param {any} options [includes configuration such as the list, current item, direction]
   * @returns {any[]} list [the new list with a marked item]
   */
  static getMarkedList(options: any): any[] {

    const list: any[] = options.list || [];
    const current: any = options.current || {};

    const isUp: boolean = options.direction === 'up';
    const isDown: boolean = options.direction === 'down';

    const length: number = options.list.length;
    let item: any;
    let marked: number;

    for (let i = 0; i < length; i++) {

      item = options.list[i];

      // Find the currently marked item and store its index
      if (item.isMarked) {

        item.isMarked = false;

        marked = i;

        break;
      }
    };

    // If no item has been marked yet set it to -1 to indicate this
    if (marked === undefined) {
      marked = -1;
    }

    if (isUp) {

      if (list[marked - 1] === undefined) {

        // Don't set the marked item to the one that's selected as the current
        if (list[list.length - 1][options.uniqueKey] === current[options.uniqueKey]) {
          list[list.length - 2].isMarked = true;

          return list;
        }

        list[list.length - 1].isMarked = true;
      }
      // If the previous item is the current, skip it and go to the previous item before it
      else if (list[marked - 1][options.uniqueKey] === current[options.uniqueKey]) {

        if (list[marked - 2] === undefined) {
          list[list.length - 1].isMarked = true;

          return list;
        }

        list[marked - 2].isMarked = true;
      }
      else {

        // If no exceptions were found then mark the previous one
        list[marked - 1].isMarked = true;
      }
    }
    else if (isDown) {

      if (list[marked + 1] === undefined) {

        // Don't set the marked item to the one that's selected as the current
        if (list[0][options.uniqueKey] === current[options.uniqueKey]) {
          list[1].isMarked = true;

          return list;
        }

        list[0].isMarked = true;
      }
      // If the next item is the current, skip it and go to the next item after it
      else if (list[marked + 1][options.uniqueKey] === current[options.uniqueKey]) {

        // If the last item in the list is selected then + 2 will become undefined, so instead we must go back to the top of the list
        if (list[marked + 2] === undefined) {
          list[0].isMarked = true;

          return list;
        }

        list[marked + 2].isMarked = true;
      }
      else {

        // If no exceptions were found, mark the next one
        list[marked + 1].isMarked = true;
      }
    }

    return list;
  }

  /* Returns the currently marked item in a list, if multiple items are marked, only the first item is returned
   *
   * @param {any[]} list [the list in which to find the marked item]
   * @returns {any} item [the item with the property isMarked set to true]
   */
  static getCurrentlyMarked(list: any[]): any {

    for (const item of list) {

      if (item.isMarked) {
        return item;
      }
    };
  }

  /* Returns the provided list but with all items' property isMarked set to false
   *
   * @param {any} list [the list to reset]
   * @returns {any[]} list [the resetted list]
   */
  static resetMarkedList(list: any[]): any[] {

    for (const item of list) {
      item.isMarked = false;
    };

    return list;
  }
}