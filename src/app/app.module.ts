import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule} from '@angular/material';
import { MatCheckboxModule, MatMenuModule, } from '@angular/material';

import { UsersComponent } from './users/users.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';

import { FormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GeloofComponent } from './geloof/geloof.component';
import { ErediensteComponent } from './eredienste/eredienste.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    UsersComponent,
    MenuComponent,
    FooterComponent,
    AboutusComponent,
    GeloofComponent,
    ErediensteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
