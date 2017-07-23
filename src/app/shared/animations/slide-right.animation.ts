import {trigger, state, animate, style, transition} from '@angular/core';

export function SlideRight() {

  return trigger('slideRight', [
    state('*', style({position: 'relative'})),
    transition(':enter', [
      style({position: 'absolute', transform: 'translate3d(-100%, 0, 0)'}),
      animate('400ms ease', style({transform: 'translate3d(0, 0, 0)'}))
    ]),
    transition(':leave', [
      style({position: 'absolute', transform: 'translate3d(0, 0, 0)'}),
      animate('400ms ease', style({transform: 'translate3d(-100%, 0, 0)'}))
    ])
  ]);
}
