import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-modalskills',
  templateUrl: './modalskills.component.html',
  styleUrls: ['./modalskills.component.css']
})
export class ModalskillsComponent implements OnInit {
  skills_form!: FormGroup;
  tipo:any;
  color:any;
  submitted=false;

  constructor(private portfolioService:PortfolioService, private formBuilder: FormBuilder) { 
    this.portfolioService.getDatos().subscribe(portfolio =>{
      this.skills_form=portfolio.aboutme;
      });
    this.skills_form= this.formBuilder.group({
      tipo:['', Validators.required],
      nombre:['',Validators.required],
      color:['',Validators.required],
      porcent:['', [Validators.required, Validators.min(0), Validators.max(100)]],
   })
  }

  ngOnInit(): void {
    
  }


  get Tipo(){
    return this.skills_form.get("tipo");
   }
   get TipoValid() {
     return this.Tipo?.touched && !this.Tipo?.valid;
   }
 
   get Nombre(){
    return this.skills_form.get("nombre");
   }
   get NombreValid() {
     return this.Nombre?.touched && !this.Nombre?.valid;
   }

   get Color(){
    return this.skills_form.get("color");
   }
   get ColorValid() {
     return this.Color?.touched && !this.Color?.valid;
   }

   get Porcent(){
    return this.skills_form.get("porcent");
   }
   get PorcentValid() {
     return this.Porcent?.touched && !this.Porcent?.valid;
   }


   onSubmit(event: Event) {
    // Detenemos la propagación o ejecución del comportamiento submit de un form
    event.preventDefault; 
 
    if (this.skills_form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo en orden. Ya puede enviar su formulario.");
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.skills_form.markAllAsTouched()
      alert("Revise su formulario."); 
    }
  }

  onReset(): void {
    this.submitted = false;
    this.skills_form.reset();
  }


}
