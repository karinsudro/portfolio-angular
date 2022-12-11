import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
//inicializo variables de instancias (el array)
  skillsfront:any = [];
  skillsback:any=[];
  skillsdesign:any=[];
  skillslang:any=[];
  skillssoft:any = [];

  //inyecto el servicio para tener acceso en la clase a los métodos
  constructor(private portfolioservice:PortfolioService) { }

  ngOnInit(): void {
    //almacena en la variable de instancia los datos recuperados por el servicio
    //me suscribo xq son asincrónicos
    this.portfolioservice.getDatos().subscribe(portfolio =>{

    //inicializa variable skills (lo q puse en el json)
    this.skillsfront=portfolio.skillsfront;
    this.skillsback=portfolio.skillsback;
    this.skillsdesign=portfolio.skillsdesign;
    this.skillslang=portfolio.skillslang;
    this.skillssoft=portfolio.skillssoft;
    });
  }

}
