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
  user='';
  password='';
  //submitted = false;

  persona:Persona = new Persona("", "", "", "", "", "", "", "", "", "", "", "", "", "", "");


  constructor(private ruta: Router, private formBuilder: FormBuilder, private authService: AuthService) {
    ///grupo de controles para el form de login
    this.login_form= this.formBuilder.group({
      user:['', Validators.required],
      password:['',[Validators.required, Validators.minLength(8)]],
   })
  }
}

  ngOnInit(): void {
    sessionStorage.setItem('currentUser', null);
  }


//métodos para tomar los datos
get User(){
  return this.login_form.get("user");
 }

get Password(){
  return this.login_form.get("password");
}
//validaciones
get UserValid() {
   return this.User?.touched && !this.User?.valid;
 }

get PasswordValid(){
   return this.Password?.touched && !this.Password?.valid;
 }


 //para limpiar el form
 onReset(): void {
   //this.submitted = false;     //sacar o dejar?
   this.login_form.reset();
 }

 onSubmit(event: Event) {
   // Detenemos la propagación o ejecución del comportamiento submit de un form
   event.preventDefault; 
   if (this.login_form.valid){
     //alert("Todo en orden. Ya puede enviar su formulario.");
     //console.log(JSON.stringify(this.login_form.value)
     this.authService.loginPersona(this.login_form.value).subscribe(data => {
      console.log("DATA:" + JSON.stringify(data));

      if(data){
        alert("Ingresando al admin panel");
        this.ruta.navigate(['/aadmin'])
      }else{
        // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
        //this.login_form.markAllAsTouched()
        alert("Acceso denegado.");
        alert("Error al iniciar sesión."); 
      }
    }, error => {
         alert("Se produjo un error.")
      })

    } else {
      sessionStorage.setItem('currentUser', null);
      alert( "Ha ocurrido un error. Regresá a la página principal.")
      this.ruta.navigate(['/']); 
    
   }

}
