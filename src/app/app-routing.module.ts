import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './componentes/index/index.component';


import { ErrorComponent } from './componentes/error/error.component';
//import { NavbarComponent } from './componentes/navbar/navbar.component';
//import { NavbaradminComponent } from './componentes/navbaradmin/navbaradmin.component';
import { AadminComponent } from './componentes/aadmin/aadmin.component';
//import { GuardGuard } from './servicios/guard.guard';
import { LoginComponent } from './componentes/login/login.component';
import { LogoutComponent } from './componentes/navbaradmin/logout/logout.component';




const routes: Routes = [
  {path:'index', component:IndexComponent},
  //{path:'navbar', component:NavbarComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Logout', component:LogoutComponent},
  {path: 'aadmin', component:AadminComponent},
 // {path:'navbaradmin', component:NavbaradminComponent},
  {path:'', redirectTo:'/index', pathMatch:'full'},
  {path:'**', component:ErrorComponent}
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 