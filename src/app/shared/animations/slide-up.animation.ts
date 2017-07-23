import {trigger, state, animate, style, transition} from '@angular/core';

export function SlideUp() {

  return trigger('slideUp', [
    state('*', style({position: 'relative', display: 'block', height: '100%', width: '100%'})),
    transition(':enter', [
      style({position: 'absolute', transform: 'translate3d(0, 100%, 0)'}),
      animate('400ms ease', style({transform: 'translate3d(0, 0, 0)'}))
    ]),
    transition(':leave', [
      style({position: 'absolute', transform: 'translate3d(0, 0, 0)'}),
      animate('400ms ease', style({transform: 'translate3d(0, 100%, 0)'}))
    ])
  ]);
}
