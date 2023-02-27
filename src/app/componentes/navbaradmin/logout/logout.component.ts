import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
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

    this.ruta.navigate(['/']);
  } 


}
