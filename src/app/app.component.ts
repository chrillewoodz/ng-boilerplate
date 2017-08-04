import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit {

  public test = [];
  
  constructor() {}

  ngOnInit() {}

  upload(e): void {
    console.log(e);
  }
}
