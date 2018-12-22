import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

 import { LidmateComponent }  from './lidmate.component'
 import { LidmateLysComponent } from './lidmate-lys/lidmate-lys.component';
 import { FilterTextboxComponent } from './lidmate-lys/filter-textbox.component';
 import { LidmaatComponent } from './lidmaat/lidmaat.component';


@NgModule({
  imports:      [ CommonModule ],
  declarations: [ LidmateComponent, LidmateLysComponent, FilterTextboxComponent, LidmaatComponent ],
  exports: [ LidmateComponent ]

})
export class LidmateModule { 
  
}