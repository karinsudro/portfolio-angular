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
    
  }

  ngOnInit(): void {
    this.skills_form= this.formBuilder.group({
      tipo:['', Validators.required],
      nombre:['',Validators.required],
      color:['',Validators.required],
      porcent:['', [Validators.required, Validators.min(0), Validators.max(100)]],
   })
  }


  get Tipo(){
    return this.skills_form.get("tipo");
   }
   get TipoInvalid() {
     return this.Tipo?.touched && !this.Tipo?.valid;
   }
 
   get Nombre(){
    return this.skills_form.get("nombre");
   }
   get NombreInvalid() {
     return this.Nombre?.touched && !this.Nombre?.valid;
   }

   get Color(){
    return this.skills_form.get("color");
   }
   get ColorInvalid() {
     return this.Color?.touched && !this.Color?.valid;
   }

   get Porcent(){
    return this.skills_form.get("porcent");
   }
   get PorcentInvalid() {
     return this.Porcent?.touched && !this.Porcent?.valid;
   }


   onSubmit(): void {
    this.submitted = true;
  
    if (this.skills_form.invalid) {
      return;
    }
  
    console.log(JSON.stringify(this.skills_form.value, null, 2));
  }
  
  onReset(): void {
    this.submitted = false;
    this.skills_form.reset();
  }


}
