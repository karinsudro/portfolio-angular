import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-modaleducation',
  templateUrl: './modaleducation.component.html',
  styleUrls: ['./modaleducation.component.css']
})
export class ModaleducationComponent implements OnInit {
  education_form!: FormGroup;
  lugar:any;
  submitted=false;

  constructor(private portfolioService:PortfolioService, private formBuilder: FormBuilder) {
    this.portfolioService.getDatos().subscribe(portfolio =>{
      this.education_form=portfolio.aboutme;
      });
    this.education_form= this.formBuilder.group({
      lugar:['', Validators.required],
      anioInicio:['',Validators.required],
      anioFin:['',Validators.required],
      descrip:['', Validators.required],
   })
   }

  ngOnInit(): void {
    
  }

  get Lugar(){
    return this.education_form.get("lugar");
   }
   get LugarValid() {
     return this.Lugar?.touched && !this.Lugar?.valid;
   }
 
   get AnioInicio(){
    return this.education_form.get("anioInicio");
   }
   get AnioInicioValid() {
     return this.AnioInicio?.touched && !this.AnioInicio?.valid;
   }

   get AnioFin(){
    return this.education_form.get("anioFin");
   }
   get AnioFinValid() {
     return this.AnioFin?.touched && !this.AnioFin?.valid;
   }

   get Descrip(){
    return this.education_form.get("descrip");
   }
   get DescripValid() {
     return this.Descrip?.touched && !this.Descrip?.valid;
   }


   onSubmit(event: Event) {
    // Detenemos la propagación o ejecución del comportamiento submit de un form
    event.preventDefault; 
 
    if (this.education_form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo en orden. Ya puede enviar su formulario.");
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.education_form.markAllAsTouched()
      alert("Revise su formulario."); 
    }
  }

  onReset(): void {
    this.submitted = false;
    this.education_form.reset();
  }



}
