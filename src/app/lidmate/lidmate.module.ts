import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../_shared/shared.module';
 import { LidmateComponent }  from './lidmate.component'
 import { LidmateLysComponent } from './lidmate-lys/lidmate-lys.component';
 import { FilterTextboxComponent } from './lidmate-lys/filter-textbox.component';
 import { LidmaatComponent } from './lidmaat/lidmaat.component';


@NgModule({
  imports:      [ CommonModule, SharedModule, FormsModule ],
  declarations: [ LidmateComponent, LidmateLysComponent, FilterTextboxComponent, LidmaatComponent ],
  exports: [ LidmateComponent ]

})
export class LidmateModule { 
  
}