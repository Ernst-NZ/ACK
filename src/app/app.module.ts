import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatNativeDateModule } from '@angular/material';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule} from '@angular/material';
import { MatCheckboxModule, MatMenuModule, } from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AlertModule } from 'ngx-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule} from '@angular/forms';
import { RouterModule, Router, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { environment } from '../environments/environment';
import { AngularFittextModule } from 'angular-fittext';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AuthGuard } from './_auth/auth.guard';
import { AuthInterceptor } from './_auth/auth.intercepter';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { Globals } from './globals';

import { LidmateModule } from './lidmate/lidmate.module';
import { SharedModule } from './_shared/shared.module';
import { CoreModule } from './_core/core.module';
import { UserService } from './_shared/user.service';
import { LidmaatService } from './_shared/lidmaat.service';

import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GeloofComponent } from './geloof/geloof.component';
import { ErediensteComponent } from './eredienste/eredienste.component';
import { InligtingComponent } from './inligting/inligting.component';
import { LiggingComponent } from './ligging/ligging.component';
import { JeugComponent } from './jeug/jeug.component';
import { GasvryheidComponent } from './gasvryheid/gasvryheid.component';
import { VerwelkomingComponent } from './verwelkoming/verwelkoming.component';
import { KerkraadComponent } from './kerkraad/kerkraad.component';
import { DoopComponent } from './doop/doop.component';
import { RegistrasieComponent } from './registrasie/registrasie.component';
import { PerseditComponent } from './persedit/persedit.component';
import { KontakonsComponent } from './kontakons/kontakons.component';
import { KalenderComponent } from './kalender/kalender.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { DiensRoosterComponent } from './diens-rooster/diens-rooster.component';
import { KategeseComponent } from './kategese/kategese.component';
import { DienslysComponent } from './dienslys/dienslys.component';
// import { LidmateComponent } from './lidmate/lidmate.component';
// import { LidmateLysComponent } from './lidmate/lidmate-lys/lidmate-lys.component';
// import { LidmaatComponent } from './lidmate/lidmaat/lidmaat.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

const config = {
  apiKey: "AIzaSyD0oNx4YsOD39CgEfS2mx4Ev0Z-WD2kLz0",
    authDomain: "ackemail-1234.firebaseapp.com",
    databaseURL: "https://ackemail-1234.firebaseio.com",
    projectId: "ackemail-1234",
    storageBucket: "ackemail-1234.appspot.com",
    messagingSenderId: "919818838108"
};

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MenuComponent,
    FooterComponent,
    AboutusComponent,
    GeloofComponent,
    ErediensteComponent,
    InligtingComponent,
    LiggingComponent,
    JeugComponent,
    GasvryheidComponent,
    VerwelkomingComponent,
    KerkraadComponent,
    DoopComponent,
    RegistrasieComponent,
    PerseditComponent,
    KontakonsComponent,
    KalenderComponent,
    SignUpComponent,
    UserComponent,
    SignInComponent,
    DiensRoosterComponent,
    KategeseComponent,
    DienslysComponent,
    // LidmateComponent,
  //   LidmaatComponent,
    // LidmateLysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
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
    MatNativeDateModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    LidmateModule,
    FormsModule,    
    SharedModule,
    CoreModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    AngularFittextModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NgbModule,
    NgxSpinnerModule,
    AngularFireModule.initializeApp(config)
  ],
  providers: [UserService, 
    AuthGuard,
    LidmaatService,
    Globals,
    AngularFireAuth,
    AngularFireDatabase,
  {
    provide : HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
