import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss'],
})
export class InputSearchComponent {

  @Output()
  typedSearch = new EventEmitter<string>();

  public getTypedSearch($event: any): void {
    this.typedSearch.emit($event.target.value);
  }

}
