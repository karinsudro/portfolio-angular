import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modalcontactme',
  templateUrl: './modalcontactme.component.html',
  styleUrls: ['./modalcontactme.component.css']
})

export class ModalcontactmeComponent implements OnInit {
  contact_form !: FormGroup;
  submitted=false;

  
  constructor(private formBuilder: FormBuilder) { 
    /* let mensajes=this.contact_form.value as  */

    this.contact_form= this.formBuilder.group({
      nombre:['',Validators.required],
      email:['', [Validators.required, Validators.email]],
      mensaje:['',[Validators.required, Validators.minLength(5), Validators.maxLength(250)]]
   })
  }

  ngOnInit(): void {
  }


//estos son todos métodos
get Nombre(){
  return this.contact_form.get("nombre");
 }

get Mail(){
  return this.contact_form.get("email");
 }

 get Mensaje(){
  return this.contact_form.get("mensaje");
 }
 /*get MailValid() {
   return this.Mail?.touched && !this.Mail?.valid;
 }
 get Mensaje(){
  return this.contact_form.get("mensaje");
 }*/


//para limpiar el form
onReset(): void {
  this.submitted = false;     //sacar o dejar?
  this.contact_form.reset();
}

//PROBAR DE IMPLEMENTAR EL ENVIO DEL FORM DE CONTACTO
 onSubmit(event: Event) {
  // Detenemos la propagación o ejecución del comportamiento submit de un form
  event.preventDefault; 

  if (this.contact_form.valid){
    // Llamamos a nuestro servicio para enviar los datos al servidor
    // También podríamos ejecutar alguna lógica extra
    alert("Todo en orden. Ya puede enviar su formulario.");
  }else{
    // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
    this.contact_form.markAllAsTouched()
    alert("Revise su formulario."); 
  }
}

//revisar
/*onEnviar(event: Event){
  event.preventDefault();
  if (this.form.valid){
    return this.http.post( "https://sifx3.com/emailpf.php",JSON.stringify(this.form.value)).subscribe( data=>{
      alert("Tu Mensaje ha sido enviado con exito, Gracias por Contactarme");
      this.form.reset();  
      console.log(data);

    });
    return "Exito";    
  }else{
    alert("Debe ingresar todos los datos");
    this.form.markAllAsTouched();
    return null;
  }       
}*/




}
