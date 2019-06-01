import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchContentComponent } from './search-content.component';

@NgModule({
  declarations: [SearchContentComponent],
  exports: [SearchContentComponent],
  imports: [
    CommonModule
  ]
})
export class SearchContentModule { }
