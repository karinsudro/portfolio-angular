import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

//import { PortfolioService } from './servicios/portfolio.service';


//componentes
import { AppComponent } from './app.component';
import { IndexComponent } from './componentes/index/index.component';
import { LoginComponent } from './componentes/login/login.component';
import { ErrorComponent } from './componentes/error/error.component';
import { FooterComponent } from './componentes/footer/footer.component';  


import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LogoapComponent } from './componentes/navbar/logoap/logoap.component';
import { HomeComponent } from './componentes/navbar/home/home.component';
import { RedesComponent } from './componentes/navbar/redes/redes.component';
import { ResumeComponent } from './componentes/navbar/resume/resume.component';
import { ContactComponent} from './componentes/navbar/contact/contact.component';

import { PersonaComponent } from './componentes/persona/persona.component';
import { AboutMeComponent } from './componentes/aboutme/aboutme.component';
import { TeachingComponent } from './componentes/teaching/teaching.component';
import { DesignComponent } from './componentes/design/design.component';
import { EducationComponent } from './componentes/education/education.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProjectsComponent } from './componentes/projects/projects.component';

import { AadminComponent } from './componentes/aadmin/aadmin.component';
import { NavbaradminComponent } from './componentes/navbaradmin/navbaradmin.component';
import { LogoapadminComponent } from './componentes/navbaradmin/logoapadmin/logoapadmin.component';
import { HomeeadminComponent } from './componentes/navbaradmin/homeeadmin/homeeadmin.component';
import { ModalpersonaComponent } from './modals/modalpersona/modalpersona.component';
import { ModalaboutmeComponent } from './modals/modalaboutme/modalaboutme.component';
import { ModalredesComponent } from './modals/modalredes/modalredes.component';
import { ModalteachingComponent } from './modals/modalteaching/modalteaching.component';
import { ModaldesignComponent } from './modals/modaldesign/modaldesign.component';
import { ModaleducationComponent } from './modals/modaleducation/modaleducation.component';
import { ModalskillsComponent } from './modals/modalskills/modalskills.component';
import { ModalprojectsComponent } from './modals/modalprojects/modalprojects.component';
import { ModalregisterComponent } from './modals/modalregister/modalregister.component';

import { PersonaService } from './servicios/persona.service';
import { InterceptorInterceptor } from './servicios/interceptor.interceptor';




@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        PersonaComponent,
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
        HomeeadminComponent,
        AadminComponent,
        ModalredesComponent,
        ModalpersonaComponent,
        ModalregisterComponent,
        ModalteachingComponent,
        ModalaboutmeComponent,
        ModaldesignComponent,
        ModaleducationComponent,
        ModalskillsComponent,
        ModalprojectsComponent,
        ResumeComponent,
    ],
    providers: [
        PersonaService,
        {provide: HTTP_INTERCEPTORS, useClass: InterceptorInterceptor, multi:true}
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ]
})

export class AppModule { }
