import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '../_shared/shared.module';
 import { LidmateComponent }  from './lidmate.component'
 import { LidmateLysComponent } from './lidmate-lys/lidmate-lys.component';
 import { FilterTextboxComponent } from './lidmate-lys/filter-textbox.component';
 import { LidmaatComponent } from './lidmaat/lidmaat.component';
import { MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatButtonModule, MatCheckboxModule, MatIconModule, MatListModule, MatMenuModule, MatPaginatorModule, MatSidenavModule, MatSortModule, MatTableModule, MatToolbarModule, MatInputModule, MatRippleModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports:      [ CommonModule, SharedModule, FormsModule, NgbModule,
                  MatDatepickerModule,
                  MatNativeDateModule,
                  MatFormFieldModule,
                  BrowserAnimationsModule,
                  MatButtonModule,
                  MatButtonModule,
                  MatCheckboxModule,
                  MatFormFieldModule,
                  MatIconModule,
                  MatListModule,
                  MatMenuModule,
                  MatPaginatorModule,
                  MatSidenavModule,
                  MatSortModule,
                  MatTableModule,
                  MatToolbarModule,
                  MatInputModule,
                  MatRippleModule,
                  MatDatepickerModule,
                  MatNativeDateModule, ],
  declarations: [ LidmateComponent, LidmateLysComponent, FilterTextboxComponent, LidmaatComponent ],
  exports: [ LidmateComponent ]

})
export class LidmateModule { 
  
}