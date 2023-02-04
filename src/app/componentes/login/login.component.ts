import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { AuthService } from 'src/app/servicios/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {  
  login_form: FormGroup;
  //FormGroup: any;
  //login_form:any;
  user='';
  clave='';
  authService: any;
  
  //persona:Persona = new Persona("", "", "", "", "", "");


  constructor(private ruta: Router, private formBuilder: FormBuilder, private autenService: AuthService) {
    ///grupo de controles para el form de login
    this.login_form= this.formBuilder.group({
      user:['', Validators.required],
      clave:['',[Validators.required, Validators.minLength(8)]],
   })
  }


  ngOnInit(): void {
    //sessionStorage.setItem('currentUser', null);
  }


//métodos para tomar los datos
get User(){
  return this.login_form.get("user");
 }

get Clave(){
  return this.login_form.get("clave");
}
//validaciones
get UserValid() {
   return this.User?.touched && !this.User?.valid;
 }

get ClaveValid(){
   return this.Clave?.touched && !this.Clave?.valid;
 }


 //para limpiar el form
 limpiar(): void {
  console.log("Formulario limpio")
   this.login_form.reset();
 }

 
 //para enviar el form
 onEnviar(event: Event){
  // Detenemos la propagación o ejecución del compotamiento submit de un form
  
   
 if (this.login_form.valid){
    // Llamamos a nuestro servicio para enviar los datos al servidor
    // También podríamos ejecutar alguna lógica extra
    event.preventDefault; 
let persona:Persona = new Persona("", "", "", "", this.login_form.get("user"),this.login_form.get("clave"));

    this.autenService.loginPersona(this.login_form.value).subscribe(data=>{
      console.log("DATA:" + JSON.stringify(data));
      if (data === null || data === undefined)
      {
        alert("Credenciales no validas");
      }else{
      this.ruta.navigate(['/aadmin']);
      }
    },
    error=>{
      console.log(error);
      alert("Credenciales no validos" + error);
    })
    
  }
  else{
    // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
    sessionStorage.setItem('currenUser', "null");
    sessionStorage.setItem('idUser', "0");
    alert("Credenciales no validas");
  }

}


}
