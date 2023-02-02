import { Component, OnInit } from '@angular/core';
import { Red } from 'src/app/model/red';
import { RedService } from 'src/app/servicios/red.service';
//import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {
  red?:Red[];



  constructor(private redesServ:RedService) { }

  ngOnInit(): void {
    this.cargarRed();
  }


  /*cargarPersona(): void{
    //muestra todas las personas
    this.personaServ.get().subscribe(data => (this.persona=data));
  }*/

  cargarRed(): void{   //sin retorno, solo caraga datos
    this.redesServ.getRedes().subscribe(data => (this.red=data));
  }

}
