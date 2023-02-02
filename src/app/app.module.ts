import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//import { PortfolioService } from './servicios/portfolio.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PortadaComponent } from './componentes/portada/portada.component';
import { AboutMeComponent } from './componentes/aboutme/aboutme.component';
import { TeachingComponent } from './componentes/teaching/teaching.component';
import { DesignComponent } from './componentes/design/design.component';
import { EducationComponent } from './componentes/education/education.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ContactComponent} from './componentes/navbar/contact/contact.component';
import { FooterComponent } from './componentes/footer/footer.component';  
import { ProjectsComponent } from './componentes/projects/projects.component';
import { ErrorComponent } from './componentes/error/error.component';
import { IndexComponent } from './componentes/index/index.component';
import { LoginComponent } from './componentes/login/login.component';
import { NavbaradminComponent } from './componentes/navbaradmin/navbaradmin.component';
import { LogoapComponent } from './componentes/navbar/logoap/logoap.component';
import { HomeComponent } from './componentes/navbar/home/home.component';
import { RedesComponent } from './componentes/navbar/redes/redes.component';
import { LogoapadminComponent } from './componentes/navbaradmin/logoapadmin/logoapadmin.component';
import { LogoutComponent } from './componentes/navbaradmin/logout/logout.component';
import { HomeeadminComponent } from './componentes/navbaradmin/homeeadmin/homeeadmin.component';
import { AadminComponent } from './componentes/aadmin/aadmin.component';
import { ModalloginComponent } from './modals/modallogin/modallogin.component';
import { ModalredesComponent } from './modals/modalredes/modalredes.component';
import { ModalportadaComponent } from './modals/modalportada/modalportada.component';
import { ModalregisterComponent } from './modals/modalregister/modalregister.component';
import { ModalteachingComponent } from './modals/modalteaching/modalteaching.component';
import { ModalaboutmeComponent } from './modals/modalaboutme/modalaboutme.component';
import { ModaldesignComponent } from './modals/modaldesign/modaldesign.component';
import { ModaleducationComponent } from './modals/modaleducation/modaleducation.component';
import { ModalskillsComponent } from './modals/modalskills/modalskills.component';
import { ModalprojectsComponent } from './modals/modalprojects/modalprojects.component';
import { ModalcontactmeComponent } from './modals/modalcontactme/modalcontactme.component';
import { ResumeComponent } from './componentes/navbar/resume/resume.component';
import { PersonaService } from './servicios/persona.service';
import { InterceptorService } from './servicios/interceptor.service';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PortadaComponent,
    AboutMeComponent,
    TeachingComponent,
    DesignComponent,
    EducationComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent,
    ProjectsComponent,
    ErrorComponent,
    IndexComponent,
    LoginComponent,
    NavbaradminComponent,
    LogoapComponent,
    HomeComponent,
    RedesComponent,
    LogoapadminComponent,
    LogoutComponent,
    HomeeadminComponent,
    AadminComponent,
    ModalloginComponent,
    ModalredesComponent,
    ModalportadaComponent,
    ModalregisterComponent,
    ModalteachingComponent,
    ModalaboutmeComponent,
    ModaldesignComponent,
    ModaleducationComponent,
    ModalskillsComponent,
    ModalcontactmeComponent,
    ModalprojectsComponent,
    ResumeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    PersonaService,
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true}
  ],  //PortfolioService
  bootstrap: [AppComponent]
})

export class AppModule { }
