import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/servicios/education.service';
//import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  //education:any=[];

  education!: Education[];
  titulo: string = "Education";



  constructor(private educationServ:EducationService) { }

  ngOnInit(): void {
    this.cargarEducation();
  }


  /*cargarPersona(): void{
    //muestra todas las personas
    this.personaServ.get().subscribe(data => (this.persona=data));
  }*/

  cargarEducation(): void{   //sin retorno, solo caraga datos
    this.educationServ.getEducations().subscribe(data => (this.education=data));
  }
  
  }