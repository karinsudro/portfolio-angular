import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { ProjectService } from 'src/app/servicios/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  project?:Project[];
  titulo: string = "Projects";
  

  constructor(private projectServ:ProjectService) { }

  ngOnInit(): void {
    this.cargarProject();
  }


  /*cargarPersona(): void{
    //muestra todas las personas
    this.personaServ.get().subscribe(data => (this.persona=data));
  }*/

  cargarProject(): void{   //sin retorno, solo caraga datos
    this.projectServ.getProjects().subscribe(data => (this.project=data));
  }


}
