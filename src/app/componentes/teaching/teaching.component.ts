import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
//import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-teaching',
  templateUrl: './teaching.component.html',
  styleUrls: ['./teaching.component.css']
})
export class TeachingComponent implements OnInit {
    //inicializo variables de instancias
  //teaching: any = [];

  //para el ngFor en el html
  experience:Experiencia[]=[]; //trae array con info. CRUD conmodales
  titulo= "Teaching experience";


  //inyecto el servicio para tener acceso en la clase a los métodos
  constructor(private expeServ:ExperienciaService) { }

  ngOnInit(): void {
    this.cargarExperiencias();
  }


  cargarExperiencias(): void{
    this.expeServ.getExperiencias().subscribe(data =>{
      this.experience=data;
  })}

}
