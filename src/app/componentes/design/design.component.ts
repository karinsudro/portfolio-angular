import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
//import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {
  //inicializo variables de instancias
//design: any = [];

//para el ngFor en el html
experience:Experiencia[]=[]; //trae array con info. CRUD conmodales
titulo= "Graphic designer experience";

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