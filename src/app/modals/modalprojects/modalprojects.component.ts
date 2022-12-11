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
    
   }

  ngOnInit(): void {
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



   get Imagen(){
    return this.project_form.get("imagen");
   }
   get ImagenInvalid() {
     return this.Imagen?.touched && !this.Imagen?.valid;
   }

  get Titulo(){
    return this.project_form.get("titulo");
   }
   get TituloInvalid() {
     return this.Titulo?.touched && !this.Titulo?.valid;
   }
 
   get Descrip(){
    return this.project_form.get("descrip");
   }
   get DescripInvalid() {
     return this.Descrip?.touched && !this.Descrip?.valid;
   }

   get Demo(){
    return this.project_form.get("demo");
   }
   get DemoInvalid() {
     return this.Demo?.touched && !this.Demo?.valid;
   }

   get Repo(){
    return this.project_form.get("repo");
   }
   get RepoInvalid() {
     return this.Repo?.touched && !this.Repo?.valid;
   }


   onSubmit(): void {
    this.submitted = true;

    if (this.project_form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.project_form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.project_form.reset();
  }
}
