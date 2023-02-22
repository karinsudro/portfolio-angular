import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExpeDesign } from 'src/app/model/expe-design';
import { ExpeDesignService } from 'src/app/servicios/expe-design.service';

@Component({
  selector: 'app-modaldesign',
  templateUrl: './modaldesign.component.html',
  styleUrls: ['./modaldesign.component.css']
})

export class ModaldesignComponent implements OnInit {
  design_form!: FormGroup;
  expeDes: ExpeDesign[]=[];
  design: any;
  id?: number;

  
  constructor(private expeDesServ: ExpeDesignService, private formBuilder: FormBuilder, private httpClient: HttpClient, private ruta: Router) { 
    this.design_form= this.formBuilder.group({
      id: [''],
      cargo:['', Validators.required],
      inicio:['', Validators.required],
      fin:['', Validators.required],
      lugar:['', Validators.required],
      descripcion:['', Validators.required]
      });
  }




  //metodos y validaciones
  get Cargo(){
  return this.design_form.get("cargo");
  }
  get CargoValid() {
    return this.Cargo?.touched && !this.Cargo?.valid;
  }

  get Inicio(){
   return this.design_form.get("inicio");
  }
  get InicioValid() {
    return this.Inicio?.touched && !this.Inicio?.valid;
  }

  get Fin(){
   return this.design_form.get("fin");
  }
  get FinValid() {
    return this.Fin?.touched && !this.Fin?.valid;
  }

  get Lugar(){
   return this.design_form.get("lugar");
  }
  get LugarValid() {
    return this.Lugar?.touched && !this.Lugar?.valid;
  }

  get Descripcion(){
   return this.design_form.get("descripcion");
  }
  get DescripcionValid() {
    return this.Descripcion?.touched && !this.Descripcion?.valid;
  }



  getExpeDesigns(): void{
    this.expeDesServ.getExpeDesigns().subscribe({
      next: (data) => {
        this.expeDes=data;
        console.log("Experiencias en diseño cargadas correctamente");
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
  })
  }
  
    ngOnInit(): void {
      this.getExpeDesigns();
    }
  
  
    findExpeDesign(id: number){
      this.expeDesServ.findExpeDesign(id).subscribe({
        next: (data) => {
          this.design_form.setValue(data);
        },
        error: (e) => console.error(e),
        complete: ()=> console.info('complete')
      });
      console.log("Experiencia en diseño cargada correctamente");
    }
  
    saveExpeDesign() {
      let design = this.design_form.value;
      if (design.id == '') {
        this.expeDesServ.saveExpeDesign(design).subscribe({
          next: (data) => {
            this.reset();
          },
          error: (e) => console.error(e),
          complete: () => console.info('complete')
        });
        window.location.reload();
        console.log("Experiencias en diseño cargadas correctamente");
      } else {
        this.expeDesServ.editExpeDesign(design).subscribe({
          next: (data) => {
            this.reset();
          },
          error: (e) => console.error(e),
          complete: () => console.info('complete')
        });
        window.location.reload();
        console.log("Experiencias en diseño modificadas correctamente");
      }
    }
  
    deleteExpeDesign(id: number) {
      if (confirm("Querés eliminar esta experiencia?")) {
        this.expeDesServ.deleteExpeDesign(id).subscribe(data => {});
        window.location.reload();
        console.log("Experiencia en diseño eliminada correctamente");
      }
    }
         
    reset() {
      console.log("Se limpió el formulario");
      this.design_form.reset();
    }
  
  
    back(){
      this.ruta.navigate(['/aadmin']);
    }


}
