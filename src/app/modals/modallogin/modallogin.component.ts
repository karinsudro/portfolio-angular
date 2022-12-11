import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-modallogin',
  templateUrl: './modallogin.component.html',
  styleUrls: ['./modallogin.component.css']
})

export class ModalloginComponent implements OnInit {
  login_form!: FormGroup;
  submitted = false;
  

  constructor(private formBuilder: FormBuilder) {
    
   }

  ngOnInit(): void {
    ///grupo de controles para el form de modal login
    this.login_form= this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(8)]],
   })
  }

  //estos son todos métodos
  get Mail(){
   return this.login_form.get("email");
  }
  get MailInvalid() {
    return this.Mail?.touched && !this.Mail?.valid;
  }

  get Password(){
    return this.login_form.get("password");
  }
  get PasswordInvalid(){
    return this.Password?.touched && !this.Password?.valid;
  } 


  onSubmit(): void {
    this.submitted = true;

    if (this.login_form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.login_form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.login_form.reset();
  }


 /*  onSubmit(event: Event){
    event.preventDefault; 
 
    if (this.login_form.valid){ */
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
  /*     console.log("Todo en orden. Ya puede enviar su formulario.")
    }else{ */
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
     /*  this.login_form.markAllAsTouched(); 
    }
  } */
 

  /* onSubmit(event: Event){
    // Detenemos la propagación o ejecución del comportamiento submit de un form
    event.preventDefault; 
 
    if (this.login_form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo en orden. Ya puede enviar su formulario.")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.login_form.markAllAsTouched(); 
    }
 
  } */


  

}
