import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GeloofComponent } from './geloof/geloof.component';
import { ErediensteComponent } from './eredienste/eredienste.component';
import { InligtingComponent } from './inligting/inligting.component';
import { LiggingComponent } from './ligging/ligging.component';
import { GasvryheidComponent } from './gasvryheid/gasvryheid.component';
import { JeugComponent } from './jeug/jeug.component';
import { VerwelkomingComponent } from './verwelkoming/verwelkoming.component';
import { KerkraadComponent } from './kerkraad/kerkraad.component';
import { DoopComponent } from './doop/doop.component';
import { RegistrasieComponent } from './registrasie/registrasie.component';
import { PerseditComponent } from './persedit/persedit.component';
import { KontakonsComponent } from './kontakons/kontakons.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AuthGuard } from './_auth/auth.guard';
import { LidmateComponent } from './lidmate/lidmate.component';
import { LidmaatComponent } from './lidmate/lidmaat/lidmaat.component'
import { LidmateLysComponent } from './lidmate/lidmate-lys/lidmate-lys.component';
import { DiensRoosterComponent } from './diens-rooster/diens-rooster.component';
import { LidAddressComponent } from './lidmate/lid-address/lid-address.component';
import { KategeseComponent } from './kategese/kategese.component';
import { DienslysComponent } from './dienslys/dienslys.component';
import { EmailsComponent } from './emails/emails.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: MenuComponent
  // }, 
  // {
  //   path: 'menu',
  //   component: MenuComponent
  // },
  
  { path: 'menu', component: MenuComponent, canActivate: [AuthGuard] },
 
  {
    path: 'dienslys',
    component: DienslysComponent
  },
  {
    path: 'kategese',
    component: KategeseComponent
  },
  {
    path: 'lidmate', component: LidmateComponent, canActivate:[AuthGuard],
    children: [{ path: '', component: LidmaatComponent, canActivate:[AuthGuard]}]
  }, 
  {
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: SignUpComponent }]
  },  
  {
    path: 'login', component: UserComponent,
    children: [{ path: '', component: SignInComponent }]
  },
  {
    path: 'kontakons',
    component: KontakonsComponent
  }, 
  {
    path: 'diens-rooster',
    component: DiensRoosterComponent, canActivate:[AuthGuard]
  },
  {
    path: 'persedit',
    component: PerseditComponent, canActivate:[AuthGuard]
  },
  {
    path: 'emails',
    component: EmailsComponent, canActivate:[AuthGuard]
  },
  {
    path: 'registrasie',
    component: RegistrasieComponent
  },
  {
    path: 'doop',
    component: DoopComponent
  },
  {
    path: 'kerkraad',
    component: KerkraadComponent
  },
  {
    path: 'verwelkoming',
    component: VerwelkomingComponent
  },
  {
    path: 'gasvryheid',
    component: GasvryheidComponent
  },
  {
    path: 'jeug',
    component: JeugComponent
  },
  {
    path: 'ligging',
    component: LiggingComponent
  },
  {
    path: 'ligging',
    component: LiggingComponent
  },
  {
    path: 'inligting',
    component: InligtingComponent
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: 'geloof',
    component: GeloofComponent
  },
  {
    path: 'eredienste',
    component: ErediensteComponent
  }, 
  // {
  //  path: 'menu',
  //  component: MenuComponent
  // },
  { path: '', pathMatch: 'full', redirectTo: '/menu', canActivate: [AuthGuard] },
  { path: '**', pathMatch: 'full', redirectTo: '/menu', canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}

