import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/servicios/education.service';

@Component({
  selector: 'app-modaleducation',
  templateUrl: './modaleducation.component.html',
  styleUrls: ['./modaleducation.component.css']
})

export class ModaleducationComponent implements OnInit {
  education_form!: FormGroup;
  education: Education[]=[];
  educs: any;
  id?: number;


  constructor(private educServ: EducationService, private formBuilder: FormBuilder, private httpClient: HttpClient, private ruta: Router) {
    this.education_form= this.formBuilder.group({
      id: [''],
      carrera:['', Validators.required],
      inicio:['', Validators.required],
      fin:['', Validators.required],
      institucion:['', Validators.required],
      descripcion:['', Validators.required]
   })
   }


//metodos y validaciones
  get Carrera(){
   return this.education_form.get("carrera");
  }
  get CarreraValid() {
    return this.Carrera?.touched && !this.Carrera?.valid;
  }

  get Inicio(){
   return this.education_form.get("inicio");
  }
  get InicioValid() {
    return this.Inicio?.touched && !this.Inicio?.valid;
  }

  get Fin(){
   return this.education_form.get("fin");
  }
  get FinValid() {
    return this.Fin?.touched && !this.Fin?.valid;
  }

  get Institucion(){
   return this.education_form.get("institucion");
  }
  get InstitucionValid() {
    return this.Institucion?.touched && !this.Institucion?.valid;
  }

  get Descripcion(){
   return this.education_form.get("descripcion");
  }
  get DescripcionValid() {
    return this.Descripcion?.touched && !this.Descripcion?.valid;
  }


  getEducations(): void{
    this.educServ.getEducations().subscribe({
      next: (data) => {
        this.education=data;
        console.log("Estudios cargados correctamente");
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
  })
  }
  
  ngOnInit(): void {
    this.getEducations();
  }
  
  
  findEducation(id: number){
    this.educServ.findEducation(id).subscribe({
      next: (data) => {
        this.education_form.setValue(data);
      },
      error: (e) => console.error(e),
      complete: ()=> console.info('complete')
    });
    console.log("Estudios cargados correctamente");
  }
  
  
    saveEducation() {
      let educs = this.education_form.value;
      if (educs.id == '') {
        this.educServ.saveEducation(educs).subscribe({
          next: (data) => {
            this.reset();
          },
          error: (e) => console.error(e),
          complete: () => console.info('complete')
        });
        window.location.reload();
        alert("Estudio cargado correctamente");
      } else {
        this.educServ.updateEducation(educs.id, educs).subscribe({
          next: (data) => {
            this.reset();
          },
          error: (e) => console.error(e),
          complete: () => console.info('complete')
        });
        window.location.reload();
        alert("Estudio modificado correctamente");
      }
    }
  
    deleteEducation(id: number) {
      if (confirm("Querés eliminar este estudio?")) {
        this.educServ.deleteEducation(id).subscribe(data => {});
        window.location.reload();
        alert("Estudio eliminado correctamente");
      }
    }
         
    reset() {
      console.log("Se limpió el formulario");
      this.education_form.reset();
    }
  
    back(){
      this.ruta.navigate(['/aadmin']);
    }



}
