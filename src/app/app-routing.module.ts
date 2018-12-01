import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
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

const routes: Routes = [
  {
    path: '',
    component: MenuComponent
  }, 
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'kontakons',
    component: KontakonsComponent
  },
  {
    path: 'persedit',
    component: PerseditComponent
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
  {
    path: 'users',
    component: UsersComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
