import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { AuthService } from 'src/app/servicios/auth.service';
import { GeneralService } from 'src/app/servicios/general.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  FormGroup: any;
  email='';
  clave='';
  authService: any;
  login_form: any;


constructor(public gralServ: GeneralService, private autenService: AuthService, private ruta: Router, private formBuilder: FormBuilder) { 
  //validaciones login
  this.login_form= this.formBuilder.group({
    email:['', [Validators.required, Validators.email]],
    clave:['',[Validators.required, Validators.minLength(8)]],
  })
}


onEnviar(event: Event){
  
  if(this.login_form.valid){
    //llamamos al servicio para enviar los datos al servidor
    //también se podría ejecutar alguna lógica extra
    //Se detiene la propagación o ejecución del comportamiento SUBMIT de un form
    event.preventDefault;
    let persona: Persona = new Persona("", "", "", "", this.login_form.get("email"), this.login_form.get("clave"));

    this.autenService.login(this.login_form.value).subscribe(data=>{
      console.log("DATA: " + JSON.stringify(data));
      if(data === null || data === undefined){
        alert("Credenciales no váldas");
      }else{
        this.ruta.navigate(['/aadmin']);
      }
    }, error=>{
      console.log(error);
      alert("Credenciales no válidas" + error);
    })
  } else{
    //corremos las validaciones para que se ejecuten los mensajes de error en el template
    sessionStorage.setItem('currentUser', "null");
    sessionStorage.setItem('idUser', "0");
    alert("Credenciales no válidas");
  }
}


ngOnInit(): void {}


//métodos para toma de datos
get Email(){
  return this.login_form.get("email");
}

get Clave(){
  return this.login_form.get("clave");
}

//validaciones
get EmailValid() {
   return this.Email?.touched && !this.Email?.valid;
}

get ClaveValid(){
   return this.Clave?.touched && !this.Clave?.valid;
}



//para limpiar el form
limpiar(): void {
  console.log("Formulario limpio")
   this.login_form.reset();
}



  /* onLogout(): void{
    this.autenService.logOutUser();
    this.ruta.navigate(['/']);
  } */


}
