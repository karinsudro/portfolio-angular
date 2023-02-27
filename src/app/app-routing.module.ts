import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './componentes/index/index.component';


import { ErrorComponent } from './componentes/error/error.component';
import { AadminComponent } from './componentes/aadmin/aadmin.component';
import { GuardGuard } from './servicios/guard.guard';
import { LoginComponent } from './componentes/login/login.component';
//import { LogoutComponent } from './componentes/navbaradmin/logout/logout.component';




const routes: Routes = [
  {path:'index', component:IndexComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'aadmin', component:AadminComponent},   /*, canActivate:[GuardGuard] - agregarlo luego de resolver aadmin*/
  /* {path: 'Logout', component:LogoutComponent}, */
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path:'**', component:ErrorComponent}
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 