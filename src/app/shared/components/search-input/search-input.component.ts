import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SearchInputComponent implements OnDestroy, OnInit {
  @Input() placeholder = '';
  @Input() debounceTime = 300;
  @Output() search: EventEmitter<any> = new EventEmitter<any>();

  public query = new FormControl();

  private querySubscription: Subscription;

  constructor() {}

  ngOnInit() {

    // Debounces the user input before fetching new data from the api
    // DistinctUntilChanged prevents a request if the original query haven't changed
    this.querySubscription = this.query.valueChanges
      .debounceTime(this.debounceTime)
      .distinctUntilChanged()
      .subscribe(query => this.search.emit(query));
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
