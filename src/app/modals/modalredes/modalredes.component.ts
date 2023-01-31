import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-modalredes',
  templateUrl: './modalredes.component.html',
  styleUrls: ['./modalredes.component.css']
})
export class ModalredesComponent implements OnInit {
  redes_form !: FormGroup;
  submitted=false;

  constructor(private portfolioService:PortfolioService, private formBuilder: FormBuilder) { 
    this.portfolioService.getDatos().subscribe(portfolio =>{
      this.redes_form=portfolio.aboutme;
      });
    const red = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    this.redes_form= this.formBuilder.group({
      icono:['', Validators.required],
      link: ['', [Validators.required, Validators.pattern(red)]],
   })
  }



  ngOnInit(): void {
    
  }


//estos son todos métodos
get Icono(){
  return this.redes_form.get("aboutme");
 }
 get IconoValid() {
   return this.Icono?.touched && !this.Icono?.valid;
 }

 get Link(){
   return this.redes_form.get("texto");
 }
 get LinkValid(){
   return this.Link?.touched && !this.Link?.valid;
 }

 onSubmit(event: Event) {
  // Detenemos la propagación o ejecución del comportamiento submit de un form
  event.preventDefault; 

  if (this.redes_form.valid){
    // Llamamos a nuestro servicio para enviar los datos al servidor
    // También podríamos ejecutar alguna lógica extra
    alert("Todo en orden. Ya puede enviar su formulario.");
  }else{
    // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
    this.redes_form.markAllAsTouched()
    alert("Revise su formulario."); 
  }
}

onReset(): void {
  this.submitted = false;
  this.redes_form.reset();
}



  
}
