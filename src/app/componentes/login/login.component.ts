import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { GeneralService } from 'src/app/servicios/general.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  login_form: FormGroup;

  constructor(private gralServ: GeneralService, private formBuilder: FormBuilder, private autenService: AuthService, private ruta: Router) {
    // Creamos el grupo de controles para el formulario de login
    this.login_form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      clave: ['', [Validators.required, Validators.minLength(8)]],
    })
  }
   

  ngOnInit(): void {}

  // Métodos para obtener los controles del formulario y validarlos
  get Clave() {
    return this.login_form.get("clave");
  }

  get Email() {
    return this.login_form.get("email");
  }

  get ClaveValid() {
    return this.Clave?.touched && !this.Clave?.valid;
  }

  get EmailValid() {
    return this.Email?.touched && !this.Email?.valid;
  }


  /* onEnviar(event: Event) {
    event.preventDefault();
    // Si el formulario es válido, llamamos al servicio para enviar los datos al servidor
    if (this.login_form.valid) {
      let persona: Persona = new Persona("", "", "", "", this.login_form?.get("email")?.value, this.login_form?.get("password")?.value);
      this.autenService.loginPersona(this.login_form.value).subscribe(data => {
        console.log("DATA:" + JSON.stringify(data));
        if (data === null || data === undefined) {
          alert("Credenciales no válidas");
        } else {
          this.ruta.navigate(['/aadmin']);
        }
      },
        error => {
          console.log(error);
          alert("Credenciales no válidas" + error);
        })
    } else {
      // Si el formulario no es válido, mostramos una alerta
      sessionStorage.setItem('currenUser', "null");
      sessionStorage.setItem('idUser', "0");
      alert("Credenciales no válidas");
    }
  } */

//Josman
onEnviar(event: Event) {
  if (this.login_form.valid) {
      event.preventDefault;
      this.autenService.loginPersona(this.login_form.value).subscribe(data => {               
          if (data === null || data === undefined)
          {
            alert("Credenciales no validas");
          }else{
            this.ruta.navigate(['/aadmin/' + data.id]); 
          }
        },            
        error => {
            alert("Credenciales no validas " + error);
        })             
  }else {
      sessionStorage.setItem('currentUser', "null");
      sessionStorage.setItem('idUser', "0");
      alert("Credenciales no validas");
      
  }
}

onCerrar() {
      sessionStorage.setItem('currentUser', "null");
      sessionStorage.setItem('idUser', "0");  
      this.ruta.navigate(['/']);
}

}