import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';



@Component({
  selector: 'app-modalportada',
  templateUrl: './modalportada.component.html',
  styleUrls: ['./modalportada.component.css']
})
export class ModalportadaComponent implements OnInit {
  portada_form!: FormGroup;
  persona: Persona[]=[];
  id?: number;



  constructor(private persoServ: PersonaService, private formBuilder: FormBuilder, private httpClient: HttpClient, private ruta: Router) {
    this.portada_form= this.formBuilder.group({
      id: [''],
      hola: [''],
      nombre:['', Validators.required],
      apellido:['', Validators.required],
      cargo:['', Validators.required],
   })
   }



  //estos son todos métodos y validaciones
  get Hola(){
    return this.portada_form.get("hola");
   }
  get HolaValid() {
     return this.Hola?.touched;
   }

  get Nombre(){
    return this.portada_form.get("nombre");
   }
  get NombreValid() {
     return this.Nombre?.touched;
   }
  
   get Apellido(){
     return this.portada_form.get("apellido");
   }
   get ApellidoValid(){
     return this.Apellido?.touched && !this.Apellido?.valid;
   }
   
   get Cargo(){
    return this.portada_form.get("cargo");
  }
  get CargoValid(){
    return this.Cargo?.touched && !this.Cargo?.valid;
  } 
 

  
listarPersonas(): void{
  this.persoServ.getPersonas().subscribe({
    next: (data) => {
      this.persona=data;
      console.log("Portadas cargadas correctamente");
    },
    error: (e) => console.error(e),
    complete: () => console.info('complete')
})
}

  ngOnInit(): void {
    this.listarPersonas();
  }


  cargarPersona(id: number){
    this.persoServ.findPersona(id).subscribe({
      next: (data) => {
        this.portada_form.setValue(data);
      },
      error: (e) => console.error(e),
      complete: ()=> console.info('complete')
    });
    console.log("Portada cargada correctamente");
  }


  guardarPersona() {
    let perso = this.portada_form.value;
    if (perso.id == '') {
      this.persoServ.savePersona(perso).subscribe({
        next: (data) => {
          this.limpiar();
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
      window.location.reload();
      console.log("Portada agregada correctamente");
    } else {
      this.persoServ.editPersona(perso).subscribe({
        next: (data) => {
          this.limpiar();
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
      window.location.reload();
      console.log("Portada modificada correctamente");
    }
  }

  borrarPersona(id: number) {
    if (confirm("Querés eliminar esta persona?")) {
      this.persoServ.deletePersona(id).subscribe(data => {});
      window.location.reload();
      console.log("Portada eliminada correctamente");
    }
  }
       
  limpiar() {
    console.log("Se limpió el formulario");
    this.portada_form.reset();
  }

  volver(){
    this.ruta.navigate(['/aadmin']);
  }



}
