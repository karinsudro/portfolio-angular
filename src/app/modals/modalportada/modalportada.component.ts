import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-modalportada',
  templateUrl: './modalportada.component.html',
  styleUrls: ['./modalportada.component.css']
})
export class ModalportadaComponent implements OnInit {
  portada_form!: FormGroup;
  submitted=false;


  constructor(private portfolioService:PortfolioService, private formBuilder: FormBuilder) {
    this.portfolioService.getDatos().subscribe(portfolio =>{
      this.portada_form=portfolio.portada;
      });
      //controles
    this.portada_form= this.formBuilder.group({
      imagen:['', Validators.required],
      intro:['', Validators.required],
   })
   }

  ngOnInit(): void {
    
      
  }

  //estos son todos métodos
  get Imagen(){
    return this.portada_form.get("imagen");
   }
  get ImagenValid() {
     return this.Imagen?.touched;
   }
  
   get Intro(){
     return this.portada_form.get("intro");
   }
   get IntroValid(){
     return this.Intro?.touched && !this.Intro?.valid;
   } 
 

   onSubmit(event: Event) {
    // Detenemos la propagación o ejecución del comportamiento submit de un form
    event.preventDefault; 
 
    if (this.portada_form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo en orden. Ya puede enviar su formulario.");
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.portada_form.markAllAsTouched()
      alert("Revise su formulario."); 
    }
  }

  onReset(): void {
    this.submitted = false;
    this.portada_form.reset();
  }



}
