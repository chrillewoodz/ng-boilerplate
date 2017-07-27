import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit {

  public title = 'App works!';
  public test = null;
  public options = [
    {
      id: 0,
      label: 'Item 0'
    },
    {
      id: 1,
      label: 'Item 1'
    },
    {
      id: 2,
      label: 'Item 2'
    }
  ];

  public options2 = [...this.options];

  constructor() {}

  ngOnInit() {

  }
}
