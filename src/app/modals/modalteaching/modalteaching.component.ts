import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-modalteaching',
  templateUrl: './modalteaching.component.html',
  styleUrls: ['./modalteaching.component.css']
})
export class ModalteachingComponent implements OnInit {
  teaching_form!: FormGroup;
  lugar:any;
  submitted=false;

  constructor(private portfolioService:PortfolioService, private formBuilder: FormBuilder) { 
    
  }

  ngOnInit(): void {
    this.teaching_form= this.formBuilder.group({
      lugar:['', Validators.required],
      anioInicio:['',Validators.required],
      anioFin:['',Validators.required],
      descrip:['', Validators.required],
   })
  }


  get Lugar(){
    return this.teaching_form.get("lugar");
   }
   get LugarInvalid() {
     return this.Lugar?.touched && !this.Lugar?.valid;
   }
 
   get AnioInicio(){
    return this.teaching_form.get("anioInicio");
   }
   get AnioInicioInvalid() {
     return this.AnioInicio?.touched && !this.AnioInicio?.valid;
   }

   get AnioFin(){
    return this.teaching_form.get("anioFin");
   }
   get AnioFinInvalid() {
     return this.AnioFin?.touched && !this.AnioFin?.valid;
   }

   get Descrip(){
    return this.teaching_form.get("descrip");
   }
   get DescripInvalid() {
     return this.Descrip?.touched && !this.Descrip?.valid;
   }


   onSubmit(): void {
    this.submitted = true;
  
    if (this.teaching_form.invalid) {
      return;
    }
  
    console.log(JSON.stringify(this.teaching_form.value, null, 2));
  }
  
  onReset(): void {
    this.submitted = false;
    this.teaching_form.reset();
  }
  

}
