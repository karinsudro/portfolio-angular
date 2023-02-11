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
      saludoB: [''],
      saludoC: [''],
      saludoD: [''],
      saludoE: [''],
      saludoF: [''],
      saludoG: ['']
    
   })
   }



  //estos son todos métodos y validaciones
  get Imagen(){
    return this.aboutme_form.get("imagen");
   }
  get ImagenValid() {
     return this.Imagen?.touched;
   }
   
  get SaludoA(){
    return this.aboutme_form.get("saludoA");
   }
  get SaludoAValid() {
     return this.SaludoA?.touched;
   }


  
   listarAbouts(): void{
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
      this.listarAbouts();
    }
  
  
    cargarAbout(id: number){
      this.aboutServ.findAbout(id).subscribe({
        next: (data) => {
          this.aboutme_form.setValue(data);
        },
        error: (e) => console.error(e),
        complete: ()=> console.info('complete')
      });
      console.log("About me cargado correctamente");
    }
  
  
    guardarAbout() {
      let about = this.aboutme_form.value;
      if (about.id == '') {
        this.aboutServ.saveAbout(about).subscribe({
          next: (data) => {
            this.limpiar();
          },
          error: (e) => console.error(e),
          complete: () => console.info('complete')
        });
        window.location.reload();
        console.log("About me agregado correctamente");
      } else {
        this.aboutServ.editAbout(about).subscribe({
          next: (data) => {
            this.limpiar();
          },
          error: (e) => console.error(e),
          complete: () => console.info('complete')
        });
        window.location.reload();
        console.log("About me modificado correctamente");
      }
    }
  
    borrarAbout(id: number) {
      if (confirm("Querés eliminar about me?")) {
        this.aboutServ.deleteAbout(id).subscribe(data => {});
        window.location.reload();
        console.log("About me eliminado correctamente");
      }
    }
         
    limpiar() {
      console.log("Se limpió el formulario");
      this.aboutme_form.reset();
    }
  
    volver(){
      this.ruta.navigate(['/aadmin']);
    }



}
