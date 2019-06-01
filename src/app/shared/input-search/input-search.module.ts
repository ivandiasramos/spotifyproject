import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSearchComponent } from './input-search.component';

@NgModule({
  declarations: [InputSearchComponent],
  exports: [InputSearchComponent],
  imports: [
    CommonModule
  ]
})
export class InputSearchModule { }
