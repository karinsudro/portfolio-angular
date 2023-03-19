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

  email='';
  clave='';

  persona: Persona = new Persona("", "", "", "", "", "");


  constructor(private formBuilder: FormBuilder, private autenService: AuthService, private ruta: Router) {
    // Creamos el grupo de controles para el formulario de login
    this.login_form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      clave: ['', [Validators.required, Validators.minLength(8)]],
    })
  }
   

  ngOnInit(): void {
    sessionStorage.setItem('currentUser', "");
  }

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


//marie
onEnviar(event: Event) {
  event.preventDefault;
  if (this.login_form.valid) {
    //console.log(JSON.stringify(this.login_form.value));
    this.autenService.login(this.login_form.value).subscribe(data => {
      console.log("DATA: " + JSON.stringify(data.id));
      if (data.id) {
        alert("Puedes editar el portfolio");
        this.ruta.navigate(['/aadmin']);
      } else {
        alert("Error al iniciar sesión. Credenciales no válidas!!!");
      }
    }, error => {
      alert("ERROR!!!");
    })
  } else {
    sessionStorage.setItem('currentUser', "");
    alert("Error! No tienes acceso");
    this.ruta.navigate(['/']);
  }
}


reset() {
  console.log("Se limpió el formulario");
  this.login_form.reset();
  this.ruta.navigate(['']);
}


back(){
  this.ruta.navigate(['/']);
}

}


//celina
/* onEnviar(event: Event) {
  //console.log("QUIZA ME ALEGRO!!!");
  
  event.preventDefault;
  if (this.login_form.valid) {
    console.log(JSON.stringify(this.login_form.value));
    this.autenService.login(this.login_form.value).subscribe(data => {
      console.log("DATA:" + JSON.stringify(data.id));
      // alert("hola" + data.id);
      if (data.id) {
        alert("Accediendo al dashboard");
        this.ruta.navigate(['/aadmin']);
      } else {
        alert("ACCESO INCORRECTO");
        alert("error al iniciar sesion");
      }

    }, error => {
      alert("E R R O R ! ! !");
    })

  } else {
    sessionStorage.setItem('currentUser',"");  //celi tiene null y a mi me da error
    alert("Error al iniciar sesión. Credenciales no válidas!!!");
    this.ruta.navigate(['/']);
  }
} */

//melinda
/* onEnviar(event: Event){
  event.preventDefault; 
  if (this.login_form.valid){
    //console.log(JSON.stringify(this.form.value));
    this.autenService.login(this.login_form.value).subscribe(data=> {
        //console.log("DATA: " + JSON.stringify(data.id));
        if (data){
          alert("Acceso correcto");
          this.ruta.navigate(['']);
        } else {
          alert("Acceso incorrecto, verifique email y contraseña");
        }            
      }, error => {
        //this.ruta.navigate(['login'])
        alert("error al iniciar sesion")
      })     
  }else{
    // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
    sessionStorage.setItem('currentUser', "null");
    alert("Hay un error en el formulario")
  }
} */

//Josman
/* onEnviar(event: Event) {
  if (this.login_form.valid) {
      event.preventDefault;
      this.autenService.login(this.login_form.value).subscribe(data => {               
          if (data === null || data === undefined)
          {
            alert("Credenciales no validas");
          }else{
            this.ruta.navigate(['/aadmin']); 
          }
        },            
        error => {
            alert("hay liooooo " + error);
        })             
  }else {
      sessionStorage.setItem('currentUser', "null");
      sessionStorage.setItem('idUser', "0");
      alert("Credenciales no validas");
      
  }
} */

//Ale Bombini
/* onEnviar(event: Event){
  event.preventDefault;
  if (this.login_form.valid){
  this.autenService.login(JSON.stringify(this.login_form.value)).subscribe(data =>
    {
      console.log("DATA: " + JSON.stringify(data));
      //window.location.reload();  
      this.ruta.navigate(['/aadmin'])
    }, error =>{
      alert("Error al iniciar sesion")
    })
    //this.ruta.navigate([''])
  }  else {
    alert("Hay un error en el formulario")
  }
 
} */

  //cintia
/*   onEnviar(event: Event) {
    event.preventDefault();
    // Si el formulario es válido, llamamos al servicio para enviar los datos al servidor
    if (this.login_form.valid) {
      let persona: Persona = new Persona("", "", "", "", this.login_form?.get("email")?.value, this.login_form?.get("password")?.value);
      this.autenService.loginPersona(this.login_form.value).subscribe(data => {
        //console.log("DATA:" + JSON.stringify(data));
        console.log("DATA:" + JSON.stringify(data.id));
        //if (data === null || data === undefined) 
        if(data.id){
          //alert("Credenciales no válidas");
          alert("Ingresando a dashboard");
          this.ruta.navigate(['/aadmin']);
        } else {
          //this.ruta.navigate(['/aadmin']);
          alert("Error al iniciar la sesión. Credenciales no válidas.")
        }
      },
        error => {
          //console.log(error);
          //alert("Hay liooooo" + error);
          alert("Hay liooooo");
        })
    } else {
      // Si el formulario no es válido, mostramos una alerta
      sessionStorage.setItem('currenUser', "null");
      sessionStorage.setItem('currenUser', "");
      sessionStorage.setItem('idUser', "0");
      alert("Credenciales no válidas");
      alert("Error! No tenés acceso.");
      this.ruta.navigate(['/']);
    }
  }  */