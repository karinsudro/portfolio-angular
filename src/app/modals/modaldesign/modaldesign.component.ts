import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-modaldesign',
  templateUrl: './modaldesign.component.html',
  styleUrls: ['./modaldesign.component.css']
})

export class ModaldesignComponent implements OnInit {
  design_form!: FormGroup;
  lugar:any;
  submitted = false;

  constructor(private portfolioService:PortfolioService, private formBuilder: FormBuilder) { 
    this.portfolioService.getDatos().subscribe(portfolio =>{
      this.design_form=portfolio.aboutme;
      });
    this.design_form= this.formBuilder.group({
      lugar:['', Validators.required],
      anioInicio:['',Validators.required],
      anioFin:['',Validators.required],
      descrip:['', Validators.required],
   })
  }

  ngOnInit(): void {
  }

  get Lugar(){
    return this.design_form.get("lugar");
   }
   get LugarInvalid() {
     return this.Lugar?.touched && !this.Lugar?.valid;
   }
 
   get AnioInicio(){
    return this.design_form.get("anioInicio");
   }
   get AnioInicioInvalid() {
     return this.AnioInicio?.touched && !this.AnioInicio?.valid;
   }

   get AnioFin(){
    return this.design_form.get("anioFin");
   }
   get AnioFinInvalid() {
     return this.AnioFin?.touched && !this.AnioFin?.valid;
   }

   get Descrip(){
    return this.design_form.get("descrip");
   }
   get DescripInvalid() {
     return this.Descrip?.touched && !this.Descrip?.valid;
   }


   onSubmit(event: Event) {
    // Detenemos la propagación o ejecución del comportamiento submit de un form
    event.preventDefault; 
 
    if (this.design_form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo en orden. Ya puede enviar su formulario.");
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.design_form.markAllAsTouched()
      alert("Revise su formulario."); 
    }
  }

  onReset(): void {
    this.submitted = false;
    this.design_form.reset();
  }



}
