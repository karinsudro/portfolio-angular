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
    
   }

  ngOnInit(): void {
    this.portfolioService.getDatos().subscribe(portfolio =>{
      this.portada_form=portfolio.portada;
      });
      //controles
    this.portada_form= this.formBuilder.group({
      imagen:['', Validators.required],
      intro:['', Validators.required],
   })
      
  }

  //estos son todos métodos
  get Imagen(){
    return this.portada_form.get("imagen");
   }
   /* get ImagenInvalid() {
     return this.imagen?.touched;
   }
  */
   get Intro(){
     return this.portada_form.get("intro");
   }
   get IntroInvalid(){
     return this.Intro?.touched && !this.Intro?.valid;
   } 
 
   onSubmit(): void {
    this.submitted = true;

    if (this.portada_form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.portada_form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.portada_form.reset();
  }



}
