import { Component, OnInit } from '@angular/core';
import { ExpeDesign } from 'src/app/model/expe-design';
import { ExpeDesignService } from 'src/app/servicios/expe-design.service';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {
  //inicializo variables de instancias
//design: any = [];

//para el ngFor en el html
expeDes!:ExpeDesign[]; //trae array con info. CRUD conmodales
titulo= "Graphic designer experience";

//inyecto el servicio para tener acceso en la clase a los métodos
constructor(private expeDesServ:ExpeDesignService) { }

ngOnInit(): void {
  this.getExpeDesigns();
}


getExpeDesigns(): void{
  this.expeDesServ.getExpeDesigns().subscribe(data =>{
    this.expeDes=data;
})}

}