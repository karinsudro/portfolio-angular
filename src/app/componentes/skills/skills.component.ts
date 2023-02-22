import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/servicios/skill.service';
//import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {
//inicializo variables de instancias (el array)
  /* skillsfront:any = [];
  skillsback:any=[];
  skillsdesign:any=[];
  skillslang:any=[];
  skillssoft:any = []; */

  //para el ngFor en el html
  skills:Skill[]=[]; //trae array con info. CRUD conmodales
  titulo="Hard & Soft Skills";

  //inyecto el servicio para tener acceso en la clase a los métodos
  constructor(private skillServ:SkillService) { }

  ngOnInit(): void {
    this.getSkills();
  }


  getSkills(): void{
    this.skillServ.getSkills().subscribe(data =>{
      this.skills=data;
  })}


  }


