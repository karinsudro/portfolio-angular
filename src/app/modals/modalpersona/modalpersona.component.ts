import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';



@Component({
  selector: 'app-modalpersona',
  templateUrl: './modalpersona.component.html',
  styleUrls: ['./modalpersona.component.css']
})
export class ModalpersonaComponent implements OnInit {
  //inicializo variables de instancia
  persona_form!: FormGroup;
  persona: Persona[]=[];
  id?: number;



  constructor(private persoServ: PersonaService, private formBuilder: FormBuilder, private httpClient: HttpClient, private ruta: Router) {
    this.persona_form= this.formBuilder.group({
      id: [''],
      hola: [''],
      nombre:['', Validators.required],
      apellido:['', Validators.required],
      cargo:['', Validators.required],
      email:[''],
      clave:['']
   })
   }



  //campos y validaciones
  get Hola(){
    return this.persona_form.get("hola");
   }
  get HolaValid() {
     return this.Hola?.touched;
   }

  get Nombre(){
    return this.persona_form.get("nombre");
   }
  get NombreValid() {
     return this.Nombre?.touched;
   }
  
   get Apellido(){
     return this.persona_form.get("apellido");
   }
   get ApellidoValid(){
     return this.Apellido?.touched && !this.Apellido?.valid;
   }
   
   get Cargo(){
    return this.persona_form.get("cargo");
  }
  get CargoValid(){
    return this.Cargo?.touched && !this.Cargo?.valid;
  } 
 

  
  getPersonas(): void{
    this.persoServ.getPersonas().subscribe({
      next: (data) => {
        this.persona=data;
        console.log("Personas cargadas correctamente");
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
  })
  }
  
    ngOnInit(): void {
      this.getPersonas();
    }
  
  
    findPersona(id: number){
      this.persoServ.findPersona(id).subscribe({
        next: (data) => {
          this.persona_form.setValue(data);
        },
        error: (e) => console.error(e),
        complete: ()=> console.info('complete')
      });
      console.log("Persona cargada correctamente");
    }
  
  
    savePersona() {
      let perso = this.persona_form.value;
      if (perso.id == '') {
        this.persoServ.savePersona(perso).subscribe({
          next: (data) => {
            this.reset();
          },
          error: (e) => console.error(e),
          complete: () => console.info('complete')
        });
        window.location.reload();
        alert("Persona agregada correctamente");
      } else {
        this.persoServ.updatePersona(perso.id, perso).subscribe({
          next: (data) => {
            this.reset();
          },
          error: (e) => console.error(e),
          complete: () => console.info('complete')
        });
        window.location.reload();
        alert("Persona modificada correctamente");
      }
    }
  
   /* deletePersona(id: number) {
      if (confirm("Querés eliminar esta persona?")) {
        this.persoServ.deletePersona(id).subscribe(data => {});
        window.location.reload();
        alert("Portada eliminada correctamente");
      }
    }  */
         
    reset() {
      console.log("Se limpió el formulario");
      this.persona_form.reset();
    }
  
    back(){
      this.ruta.navigate(['/aadmin']);
    }
  

}