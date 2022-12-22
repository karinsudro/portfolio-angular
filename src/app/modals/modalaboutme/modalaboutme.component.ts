import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-modalaboutme',
  templateUrl: './modalaboutme.component.html',
  styleUrls: ['./modalaboutme.component.css']
})

export class ModalaboutmeComponent implements OnInit {
  aboutme_form !: FormGroup;
  submitted = false;

  constructor(private portfolioService:PortfolioService, private formBuilder: FormBuilder) { 
    /* this.aboutme_form= this.formBuilder.group({
      aboutme:['', Validators.required],
      texto:['',[Validators.required, Validators.minLength(6)]],
   }) */
   this.portfolioService.getDatos().subscribe(portfolio =>{
    this.aboutme_form=portfolio.aboutme;
    });
  this.aboutme_form= this.formBuilder.group({
    aboutme:['', Validators.required],
    texto:['',[Validators.required, Validators.minLength(6)]],
})
  }

  ngOnInit(): void {
  }


//estos son todos métodos
get Imagen(){
  return this.aboutme_form.get("aboutme");
 }
 get ImagenInvalid() {
   return this.Imagen?.touched && !this.Imagen?.valid;
 }

 get Texto(){
   return this.aboutme_form.get("texto");
 }
 get TextoInvalid(){
   return this.Texto?.touched && !this.Texto?.valid;
 }

 onSubmit(event: Event) {
  // Detenemos la propagación o ejecución del comportamiento submit de un form
  event.preventDefault; 

  if (this.aboutme_form.valid){
    // Llamamos a nuestro servicio para enviar los datos al servidor
    // También podríamos ejecutar alguna lógica extra
    alert("Todo en orden. Ya puede enviar su formulario.");
  }else{
    // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
    this.aboutme_form.markAllAsTouched()
    alert("Revise su formulario."); 
  }
}

onReset(): void {
  this.submitted = false;
  this.aboutme_form.reset();
}

}
