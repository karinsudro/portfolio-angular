import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-modalprojects',
  templateUrl: './modalprojects.component.html',
  styleUrls: ['./modalprojects.component.css']
})
export class ModalprojectsComponent implements OnInit {

  project_form!: FormGroup;
  proyecto:any;
  submitted=false;


  constructor(private portfolioService:PortfolioService, private formBuilder: FormBuilder) {
    this.portfolioService.getDatos().subscribe(portfolio =>{
      this.project_form=portfolio.aboutme;
      });
    this.project_form= this.formBuilder.group({
      imagen:['', Validators.required],
      titulo:['',Validators.required],
      descrip:['',Validators.required],
      demo:['', Validators.required],
      repo:['', Validators.required],
   })
   }

  ngOnInit(): void {
    
  }



   get Imagen(){
    return this.project_form.get("imagen");
   }
   get ImagenValid() {
     return this.Imagen?.touched && !this.Imagen?.valid;
   }

  get Titulo(){
    return this.project_form.get("titulo");
   }
   get TituloValid() {
     return this.Titulo?.touched && !this.Titulo?.valid;
   }
 
   get Descrip(){
    return this.project_form.get("descrip");
   }
   get DescripValid() {
     return this.Descrip?.touched && !this.Descrip?.valid;
   }

   get Demo(){
    return this.project_form.get("demo");
   }
   get DemoValid() {
     return this.Demo?.touched && !this.Demo?.valid;
   }

   get Repo(){
    return this.project_form.get("repo");
   }
   get RepoValid() {
     return this.Repo?.touched && !this.Repo?.valid;
   }


   onSubmit(event: Event) {
    // Detenemos la propagación o ejecución del comportamiento submit de un form
    event.preventDefault; 
 
    if (this.project_form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo en orden. Ya puede enviar su formulario.");
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.project_form.markAllAsTouched()
      alert("Revise su formulario."); 
    }
  }

  onReset(): void {
    this.submitted = false;
    this.project_form.reset();
  }
}
