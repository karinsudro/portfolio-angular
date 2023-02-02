import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
//import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})

export class AboutMeComponent implements OnInit {
  //inicializo variables de instancias
  //aboutme:any;
  
  //personas:Persona[]=[];  //llama al modelo, q es un array 
  //personas:any;
  persona?: Persona[];
  titulo: string = "About me";
  



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
