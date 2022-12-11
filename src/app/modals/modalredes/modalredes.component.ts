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

  }



  ngOnInit(): void {
    const red = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    this.redes_form= this.formBuilder.group({
      icono:['', Validators.required],
      link: ['', [Validators.required, Validators.pattern(red)]],
   })
  }


//estos son todos métodos
get Icono(){
  return this.redes_form.get("aboutme");
 }
 get IconoInvalid() {
   return this.Icono?.touched && !this.Icono?.valid;
 }

 get Link(){
   return this.redes_form.get("texto");
 }
 get LinkInvalid(){
   return this.Link?.touched && !this.Link?.valid;
 }

 onSubmit(): void {
  this.submitted = true;

  if (this.redes_form.invalid) {
    return;
  }

  console.log(JSON.stringify(this.redes_form.value, null, 2));
}

onReset(): void {
  this.submitted = false;
  this.redes_form.reset();
}



  
}
