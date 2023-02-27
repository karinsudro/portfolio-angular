import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})


export class ContactComponent implements OnInit {
  contact_form !: FormGroup;
  submitted=false;

  constructor(private formBuilder: FormBuilder) { 
    /* let mensajes=this.contact_form.value as  */

    this.contact_form= this.formBuilder.group({
      nombre:['',Validators.required],
      mail:['', [Validators.required, Validators.email]],
      mensaje:['',[Validators.required, Validators.minLength(5), Validators.maxLength(250)]]
   })
  }

  ngOnInit(): void {
  }


  //estos son todos métodos y validaciones
get Nombre(){
  return this.contact_form.get("nombre");
 }

get Mail(){
  return this.contact_form.get("mail");
 }

 get Mensaje(){
  return this.contact_form.get("mensaje");
 }

 get NombreValid() {
  return this.Nombre?.touched && !this.Nombre?.valid;
}
 get MailValid() {
   return this.Mail?.touched && !this.Mail?.valid;
 }
 get MensajeValid(){
  return this.Mensaje?.touched && !this.Mensaje?.valid;
 }


//para limpiar el form
onReset(): void {
  this.submitted = false;     //sacar o dejar?
  this.contact_form.reset();
}

//PROBAR DE IMPLEMENTAR EL ENVIO DEL FORM DE CONTACTO
 onEnviar(event: Event) {
  // Detenemos la propagación o ejecución del comportamiento submit de un form
  event.preventDefault; 

  if (this.contact_form.valid){
    // Llamamos a nuestro servicio para enviar los datos al servidor
    // También podríamos ejecutar alguna lógica extra
    alert("Todo en orden. Envie su mensaje.");
  }else{
    // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
    this.contact_form.markAllAsTouched()
    alert("Revise su formulario."); 
  }
}
  

}