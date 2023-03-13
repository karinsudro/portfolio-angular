import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './componentes/index/index.component';


import { LoginComponent } from './componentes/login/login.component';
import { AadminComponent } from './componentes/aadmin/aadmin.component';
import { GuardGuard } from './servicios/guard.guard';
import { ErrorComponent } from './componentes/error/error.component';
//import { LogoutComponent } from './componentes/navbaradmin/logout/logout.component';


const routes: Routes = [
  {path:'', component:IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'aadmin', component:AadminComponent, canActivate:[GuardGuard]},
 /*  {path: '', redirectTo:'/index', pathMatch:'full'}, */
  {path:'**', component:ErrorComponent}
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 