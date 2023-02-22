import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/servicios/project.service';

@Component({
  selector: 'app-modalprojects',
  templateUrl: './modalprojects.component.html',
  styleUrls: ['./modalprojects.component.css']
})
export class ModalprojectsComponent implements OnInit {

  project_form!: FormGroup;
  project: Project[]=[];
  proy: any;
  id?: number;

  
  constructor(private projServ: ProjectService, private formBuilder: FormBuilder, private httpClient: HttpClient, private ruta: Router) { 
    this.project_form= this.formBuilder.group({
      id: [''],
      imagen:['', Validators.required],
      proyecto: ['', Validators.required],
      descripcion: ['', [Validators.required, Validators.minLength(6)]],
      live_url: [''],
      repo_url: [''],
    });
   
  }


//estos son todos métodos y validaciones
get Imagen(){
  return this.project_form.get("imagen");
}
get ImagenValid() {
  return this.Imagen?.touched && !this.Imagen?.valid;
}

get Proyecto(){
  return this.project_form.get("proyecto");
}
get ProyectoValid() {
  return this.Proyecto?.touched && !this.Proyecto?.valid;
}

get Descripcion(){
  return this.project_form.get("descripcion");
}
get DescripcionValid(){
  return this.Descripcion?.touched && !this.Descripcion?.valid;
} 

get LiveUrl(){
  return this.project_form.get("live_url");
}
get LiveUrlValid(){
  return this.LiveUrl?.touched && !this.LiveUrl?.valid;
} 

get RepoUrl(){
  return this.project_form.get("repo_url");
}
get RepoUrlValid(){
  return this.RepoUrl?.touched && !this.RepoUrl?.valid;
} 



getProjects(): void{
  this.projServ.getProjects().subscribe({
    next: (data) => {
      this.project=data;
      console.log("Proyectos cargados correctamente");
    },
    error: (e) => console.error(e),
    complete: () => console.info('complete')
})
}

  ngOnInit(): void {
    this.getProjects();
  }


  findProject(id: number){
    this.projServ.findProject(id).subscribe({
      next: (data) => {
        this.project_form.setValue(data);
      },
      error: (e) => console.error(e),
      complete: ()=> console.info('complete')
    });
    console.log("Proyecto cargado correctamente");
  }


  saveProject() {
    let proy = this.project_form.value;
    if (proy.id == '') {
      this.projServ.saveProject(proy).subscribe({
        next: (data) => {
          this.reset();
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
      window.location.reload();
      console.log("Proyecto agregado correctamente");
    } else {
      this.projServ.editProject(proy).subscribe({
        next: (data) => {
          this.reset();
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
      window.location.reload();
      console.log("Proyecto modificado correctamente");
    }
  }

  deleteProject(id: number) {
    if (confirm("Querés eliminar este proyecto?")) {
      this.projServ.deleteProject(id).subscribe(data => {});
      window.location.reload();
      console.log("Proyecto eliminado correctamente");
    }
  }
       
  reset() {
    console.log("Se limpió el formulario");
    this.project_form.reset();
  }


  back(){
    this.ruta.navigate(['/aadmin']);
  }

}

