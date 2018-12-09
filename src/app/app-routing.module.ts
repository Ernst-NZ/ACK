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
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AuthGuard } from './_auth/auth.guard';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeComponent } from './employees/employee/employee.component';

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
    path: 'employees',
    component: EmployeesComponent
  },
  {
    path: 'employee',
    component: EmployeeComponent
  },
  {
    path: 'employee/employees',
    component: EmployeesComponent
  },
  {
    path: 'employee/employee-list',
    component: EmployeeListComponent
  },
  {
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: SignUpComponent }]
  },  
  {
    path: 'login', component: UserComponent,
    children: [{ path: '', component: SignInComponent }]
  },
  { path : '', redirectTo:'/login', pathMatch : 'full'},

  {
    path: 'kontakons',
    component: KontakonsComponent
  },
  {
    path: 'persedit',
    component: PerseditComponent, canActivate:[AuthGuard]
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
export class AppRoutingModule { 
  
}

