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
    
   }

  ngOnInit(): void {
    this.education_form= this.formBuilder.group({
      lugar:['', Validators.required],
      anioInicio:['',Validators.required],
      anioFin:['',Validators.required],
      descrip:['', Validators.required],
   })
  }

  get Lugar(){
    return this.education_form.get("lugar");
   }
   get LugarInvalid() {
     return this.Lugar?.touched && !this.Lugar?.valid;
   }
 
   get AnioInicio(){
    return this.education_form.get("anioInicio");
   }
   get AnioInicioInvalid() {
     return this.AnioInicio?.touched && !this.AnioInicio?.valid;
   }

   get AnioFin(){
    return this.education_form.get("anioFin");
   }
   get AnioFinInvalid() {
     return this.AnioFin?.touched && !this.AnioFin?.valid;
   }

   get Descrip(){
    return this.education_form.get("descrip");
   }
   get DescripInvalid() {
     return this.Descrip?.touched && !this.Descrip?.valid;
   }


   onSubmit(): void {
    this.submitted = true;

    if (this.education_form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.education_form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.education_form.reset();
  }



}
