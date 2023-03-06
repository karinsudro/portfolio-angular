import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Red } from 'src/app/model/red';
import { RedService } from 'src/app/servicios/red.service';
//import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-modalredes',
  templateUrl: './modalredes.component.html',
  styleUrls: ['./modalredes.component.css']
})
export class ModalredesComponent implements OnInit {
  redes_form !: FormGroup;
  red: Red[]=[];
  redes: any;
  id?: number;

  
  constructor(private redServ: RedService, private formBuilder: FormBuilder, private httpClient: HttpClient, private ruta: Router) { 
    this.redes_form= this.formBuilder.group({
      id: [''],
      red:['', Validators.required],
      icono:['', Validators.required],
      link: ['', Validators.required],
      });
   
  }


//campos y validaciones
get Red(){
  return this.redes_form.get("red");
}
get RedValid() {
  return this.Red?.touched && !this.Red?.valid;
} 

get Icono(){
  return this.redes_form.get("icono");
}
get IconoValid() {
  return this.Icono?.touched && !this.Icono?.valid;
} 

get Link(){
  return this.redes_form.get("link");
}
get LinkValid(){
  return this.Link?.touched && !this.Link?.valid;
} 



getRedes(): void{
  this.redServ.getRedes().subscribe({
    next: (data) => {
      this.red=data;
      console.log("Redes cargadas correctamente");
    },
    error: (e) => console.error(e),
    complete: () => console.info('complete')
})
}

  ngOnInit(): void {
    this.getRedes();
  }


  findRed(id: number){
    this.redServ.findRed(id).subscribe({
      next: (data) => {
        this.redes_form.setValue(data);
      },
      error: (e) => console.error(e),
      complete: ()=> console.info('complete')
    });
    console.log("Red cargada correctamente");
  }


  saveRed() {
    let redes = this.redes_form.value;
    if (redes.id == '') {
      this.redServ.saveRed(redes).subscribe({
        next: (data) => {
          this.reset();
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
      window.location.reload();
      alert("Red agregada correctamente");
    } else {
      this.redServ.updateRed(redes.id, redes).subscribe({
        next: (data) => {
          this.reset();
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
      window.location.reload();
      alert("Red modificada correctamente");
    }
  }

  deleteRed(id: number) {
    if (confirm("Querés eliminar esta red?")) {
      this.redServ.deleteRed(id).subscribe(data => {});
      window.location.reload();
      alert("Red eliminada correctamente");
    }
  }
       
  reset() {
    console.log("Se limpió el formulario");
    this.redes_form.reset();
  }


  back(){
    this.ruta.navigate(['/aadmin']);
  }




}
