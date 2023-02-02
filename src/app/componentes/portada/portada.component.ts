import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
//import { PortfolioService } from 'src/app/servicios/portfolio.service'; 

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {
  //crear (inicializar) variables de instancia para guardar los datos con los que trata el servicio. SOn todos los datos que tenga q mostrar.
  //se pone el nombre q asigné en el apartado del json. Reepetir en cada .ts de componentes
  //portada:any;

  persona?:Persona[];
  portada:any;


  //inyectar servicio para tener acceso en la clase a los métodos
  constructor(private personaServ: PersonaService) { }

  ngOnInit(): void {
    this.cargarPersona();
  }


  /*cargarPersona(): void{
    //muestra todas las personas
    this.personaServ.get().subscribe(data => (this.persona=data));
  }*/

  cargarPersona(): void{   //sin retorno, solo caraga datos
    this.personaServ.getPersonas().subscribe(data => (this.persona=data));
  }

}
