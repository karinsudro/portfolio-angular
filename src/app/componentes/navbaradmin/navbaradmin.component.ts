import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-navbaradmin',
  templateUrl: './navbaradmin.component.html',
  styleUrls: ['./navbaradmin.component.css']
})
export class NavbaradminComponent implements OnInit {
  persona: any;
  modoEdit:boolean=false; 
  loginServ: any;


  constructor(private autenService: AuthService, private ruta: Router) { }


  ngOnInit(): void {
    this.loginServ.getPersonas().subscribe((data:any)=>{
      this.persona=data
    });
    if(sessionStorage.getItem('currentUser') == null){
      this.modoEdit=false;
    }else if(sessionStorage.getItem('currentUser') == ""){
      this.modoEdit=false;
    }
  }


  logOut(){
    sessionStorage.setItem('currentUser', "");
    sessionStorage.setItem('idUser', "");
    alert("SESION CERRADA");
    this.modoEdit=false;

    this.ruta.navigate(['/index']);
  } 


}