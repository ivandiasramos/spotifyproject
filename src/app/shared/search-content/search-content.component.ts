import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-content',
  templateUrl: './search-content.component.html',
  styleUrls: ['./search-content.component.scss']
})
export class SearchContentComponent {

  @Output()
  getClickedArtist = new EventEmitter<string>();

  @Input()
  id: string;

  @Input()
  srcImage: string;

  @Input()
  title: string;

  public sendClickedArtits() {
    this.getClickedArtist.emit(this.id);
  }

}
