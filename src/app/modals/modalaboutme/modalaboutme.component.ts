import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { About } from 'src/app/model/about';
import { AboutService } from 'src/app/servicios/about.service';

@Component({
  selector: 'app-modalaboutme',
  templateUrl: './modalaboutme.component.html',
  styleUrls: ['./modalaboutme.component.css']
})

export class ModalaboutmeComponent implements OnInit {
  aboutme_form !: FormGroup;
  acerca: About[]=[];
  id?: number;
  


  constructor(private aboutServ: AboutService, private formBuilder: FormBuilder, private httpClient: HttpClient, private ruta: Router) {
    this.aboutme_form= this.formBuilder.group({
      id: [''],
      foto:['', Validators.required],
      saludoA: ['', Validators.required],
      saludoB: ['', [Validators.required, Validators.minLength(6)]],
      saludoC: [''],
      saludoD: [''],
      saludoE: [''],
      saludoF: [''],
      saludoG: ['']
    
   })
   }


  //estos son campos y validaciones
  get Foto(){
    return this.aboutme_form.get("foto");
  }
  get ImagenValid() {
     return this.Foto?.touched;
  }
   
  get SaludoA(){
    return this.aboutme_form.get("saludoA");
  }
  get SaludoAValid() {
     return this.SaludoA?.touched;
  }

   get SaludoB(){
    return this.aboutme_form.get("saludoB");
  }
  get SaludoBValid() {
     return this.SaludoB?.touched;
  }


   getAbouts(): void{
    this.aboutServ.getAbouts().subscribe({
      next: (data) => {
        this.acerca=data;
        console.log("About me cargado correctamente");
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
  })
  }
  
    ngOnInit(): void {
      this.getAbouts();
    }
  
  
    findAbout(id: number){
      this.aboutServ.findAbout(id).subscribe({
        next: (data) => {
          this.aboutme_form.setValue(data);
        },
        error: (e) => console.error(e),
        complete: ()=> console.info('complete')
      });
      console.log("About me cargado correctamente");
    }
  
  
    saveAbout() {
      let about = this.aboutme_form.value;
      if (about.id == '') {
        this.aboutServ.saveAbout(about).subscribe({
          next: (data) => {
            this.reset();
          },
          error: (e) => console.error(e),
          complete: () => console.info('complete')
        });
        window.location.reload();
        alert("About me agregado correctamente");
      } else {
        this.aboutServ.updateAbout(about.id, about).subscribe({
          next: (data) => {
            this.reset();
          },
          error: (e) => console.error(e),
          complete: () => console.info('complete')
        });
        window.location.reload();
        alert("About me modificado correctamente");
      }
    }
  
    deleteAbout(id: number) {
      if (confirm("Querés eliminar about me?")) {
        this.aboutServ.deleteAbout(id).subscribe(data => {});
        window.location.reload();
        alert("About me eliminado correctamente");
      }
    }
         
    reset() {
      console.log("Se limpió el formulario");
      this.aboutme_form.reset();
    }
  
    back(){
      this.ruta.navigate(['/aadmin']);
    }



}
