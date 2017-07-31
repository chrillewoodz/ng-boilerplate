import {Directive, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[windowHeight]'
})

export class WindowHeightDirective implements OnInit {
  @Input() isActive = true;
  @Input() offset = 0;

  @HostBinding('style.height.px')
  height: number;

  @HostListener('window:resize', ['$event'])
  setHeight() {
    this.height = this.isActive ? (window.innerHeight - this.offset) : undefined;
  }

  constructor() {}

  ngOnInit() {
    this.setHeight();
  }
}
