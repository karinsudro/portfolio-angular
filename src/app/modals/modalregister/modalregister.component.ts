import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import Validation from '../../utils/validation';


@Component({
  selector: 'app-modalregister',
  templateUrl: './modalregister.component.html',
  styleUrls: ['./modalregister.component.css']
})

export class ModalregisterComponent implements OnInit {
  register_form!: FormGroup;
/*   username!: FormControl;
  email!: FormControl;
  password!: FormControl; */

  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.register_form = this.formBuilder.group(
      {username: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]]},
      {validators: [Validation.match('password', 'confirmPassword')]}
    );
  }

  ngOnInit(): void {
  }

 //estos son todos métodos
 get Username(){
  return this.register_form.get("username");
 }
 get UsernameInvalid() {
   return this.Username?.touched && !this.Username?.valid;
 }
 get Mail(){
  return this.register_form.get("email");
 }
 get MailInvalid() {
   return this.Mail?.touched && !this.Mail?.valid;
 }

 get Password(){
   return this.register_form.get("password");
 }
 get PasswordInvalid(){
   return this.Password?.touched && !this.Password?.valid;
 }

 onSubmit(event: Event) {
  // Detenemos la propagación o ejecución del comportamiento submit de un form
  event.preventDefault; 

  if (this.register_form.valid){
    // Llamamos a nuestro servicio para enviar los datos al servidor
    // También podríamos ejecutar alguna lógica extra
    alert("Todo en orden. Ya puede enviar su formulario.");
  }else{
    // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
    this.register_form.markAllAsTouched()
    alert("Revise su formulario."); 
  }
}

onReset(): void {
  this.submitted = false;
  this.register_form.reset();
}



 }



  


