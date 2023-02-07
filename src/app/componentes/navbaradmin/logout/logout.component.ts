import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
//import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

constructor(){}
  //constructor(private autenService: AuthService, private ruta: Router) { }


  ngOnInit(): void {
  }


  /* onLogout(): void{
    this.autenService.logOutUser();
    this.ruta.navigate(['/']);
  } */


}
