import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExpeTeaching } from 'src/app/model/expe-teaching';
import { ExpeTeachingService } from 'src/app/servicios/expe-teaching.service';


@Component({
  selector: 'app-modalteaching',
  templateUrl: './modalteaching.component.html',
  styleUrls: ['./modalteaching.component.css']
})
export class ModalteachingComponent implements OnInit {
  teaching_form!: FormGroup;
  expeTeach: ExpeTeaching[]=[];
  teach: any;
  id?: number;

  
  constructor(private expeTeachServ: ExpeTeachingService, private formBuilder: FormBuilder, private httpClient: HttpClient, private ruta: Router) { 
    this.teaching_form= this.formBuilder.group({
      id: [''],
      cargo:['', Validators.required],
      inicio:['', Validators.required],
      fin:['', Validators.required],
      lugar:['', Validators.required],
      descripcion:['', Validators.required],
      });
  }




  //metodos y validaciones
  get Cargo(){
  return this.teaching_form.get("cargo");
  }
  get CargoValid() {
    return this.Cargo?.touched && !this.Cargo?.valid;
  }

  get Inicio(){
   return this.teaching_form.get("inicio");
  }
  get InicioValid() {
    return this.Inicio?.touched && !this.Inicio?.valid;
  }

  get Fin(){
   return this.teaching_form.get("fin");
  }
  get FinValid() {
    return this.Fin?.touched && !this.Fin?.valid;
  }

  get Lugar(){
   return this.teaching_form.get("lugar");
  }
  get LugarValid() {
    return this.Lugar?.touched && !this.Lugar?.valid;
  }

  get Descripcion(){
   return this.teaching_form.get("descripcion");
  }
  get DescripcionValid() {
    return this.Descripcion?.touched && !this.Descripcion?.valid;
  }



  getExpeTeachings(): void{
    this.expeTeachServ.getExpeTeachings().subscribe({
      next: (data) => {
        this.expeTeach=data;
        console.log("Experiencias en enseñanza cargadas correctamente");
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
  })
  }
  
    ngOnInit(): void {
      this.getExpeTeachings();
    }
  
  
    findExpeTeaching(id: number){
      this.expeTeachServ.findExpeTeaching(id).subscribe({
        next: (data) => {
          this.teaching_form.setValue(data);
        },
        error: (e) => console.error(e),
        complete: ()=> console.info('complete')
      });
      console.log("Experiencia en enseñanza cargada correctamente");
    }
  
  
    saveExpeTeaching() {
      let teach = this.teaching_form.value;
      if (teach.id == '') {
        this.expeTeachServ.saveExpeTeaching(teach).subscribe({
          next: (data) => {
            this.reset();
          },
          error: (e) => console.error(e),
          complete: () => console.info('complete')
        });
        window.location.reload();
        console.log("Experiencia en enseñanza agregada correctamente");
      } else {
        this.expeTeachServ.editExpeTeaching(teach).subscribe({
          next: (data) => {
            this.reset();
          },
          error: (e) => console.error(e),
          complete: () => console.info('complete')
        });
        window.location.reload();
        console.log("Experiencia en enseñanza modificada correctamente");
      }
    }
  
    deleteExpeTeaching(id: number) {
      if (confirm("Querés eliminar esta experiencia?")) {
        this.expeTeachServ.deleteExpeTeaching(id).subscribe(data => {});
        window.location.reload();
        console.log("Experiencia en enseñanza eliminada correctamente");
      }
    }
         
    reset() {
      console.log("Se limpió el formulario");
      this.teaching_form.reset();
    }
  
  
    back(){
      this.ruta.navigate(['/aadmin']);
    }
  

}
