import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { Persona } from 'src/app/model/persona';
//import { AuthService } from 'src/app/servicios/auth.service';
//import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-navbaradmin',
  templateUrl: './navbaradmin.component.html',
  styleUrls: ['./navbaradmin.component.css']
})
export class NavbaradminComponent implements OnInit {
  //persona!: any;

  //modoEditar:boolean=false; 
  //loginServ: any;


  constructor(private ruta: Router) { }  // private autenService: AuthService, , private persoServ: PersonaService


  ngOnInit(): void {
    /* this.loginServ.getPersonas().subscribe((data:any)=>{
      this.persona=data
    });
    if(sessionStorage.getItem('currentUser') == null){
      this.modoEdit=false;
    }else if(sessionStorage.getItem('currentUser') == ""){
      this.modoEdit=false;
    } */
  }

  /* ngOnInit(): void {
    this.persoServ.getPersonas().subscribe((data:any)=>{
      this.persona=data
    });
    if(sessionStorage.getItem('currentUser') == null){
      this.modoEdit=false;
    }else if(sessionStorage.getItem('currentUser') == ""){
      this.modoEdit=false;
    }
  } */

//marie
  logOut(){
    if (confirm("Desea salir del Aadmin?")) {
      this.ruta.navigate(['/']);
      console.log("Cargando el index");
    }
  } 

}

/* logOut(){
  if (confirm("Desea salir del Aadmin?")) {
    window.sessionStorage.clear();  //probar con removeItem
    window.location.reload();  //lo tiene nico c
    this.ruta.navigate(['/']);
    console.log("Cargando el index");
  }
}  */