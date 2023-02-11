import { Component, OnInit } from '@angular/core';
import { ExpeTeaching } from 'src/app/model/expe-teaching';
import { ExpeTeachingService } from 'src/app/servicios/expe-teaching.service';


@Component({
  selector: 'app-teaching',
  templateUrl: './teaching.component.html',
  styleUrls: ['./teaching.component.css']
})
export class TeachingComponent implements OnInit {
    //inicializo variables de instancias
  //teaching: any = [];

  //para el ngFor en el html
  expeTeach!:ExpeTeaching[]; //trae array con info. CRUD con modales
  titulo= "Teaching experience";


  //inyecto el servicio para tener acceso en la clase a los métodos
  constructor(private expeTeachServ: ExpeTeachingService) { }

  ngOnInit(): void {
    this.cargarExpeTeach();
  }


  cargarExpeTeach(): void{
    this.expeTeachServ.getExpeTeachings().subscribe(data =>{
      this.expeTeach=data;
  })}

}
