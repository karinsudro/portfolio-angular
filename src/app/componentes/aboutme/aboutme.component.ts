import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/model/about';
import { AboutService } from 'src/app/servicios/about.service';
//import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})

export class AboutMeComponent implements OnInit {
  acerca: About[]=[];
  titulo= "About me";


  constructor(private aboutServ: AboutService) { }

  ngOnInit(): void {
    this.getAbout();
  }


  /*cargarPersona(): void{
    //muestra todas las personas
    this.personaServ.get().subscribe(data => (this.persona=data));
  }*/

  getAbout(): void{   //sin retorno, solo caraga datos
    this.aboutServ.getAbouts().subscribe(data => (this.acerca=data));
  }

}
