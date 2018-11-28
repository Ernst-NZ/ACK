import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { MenuComponent } from './menu/menu.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GeloofComponent } from './geloof/geloof.component';
import { ErediensteComponent } from './eredienste/eredienste.component';
import { InligtingComponent } from './inligting/inligting.component';
import { LiggingComponent } from './ligging/ligging.component';

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
