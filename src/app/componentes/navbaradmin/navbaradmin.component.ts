import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbaradmin',
  templateUrl: './navbaradmin.component.html',
  styleUrls: ['./navbaradmin.component.css']
})
export class NavbaradminComponent implements OnInit {


  constructor(private ruta: Router) { }  // private autenService: AuthService, , private persoServ: PersonaService


  ngOnInit(): void {
 
  }


  logOut(){
    if (confirm("Desea salir del Aadmin?")) {
      this.ruta.navigate(['/']);
      console.log("Cargando el index");
    }
  } 

}
