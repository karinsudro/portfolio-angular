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
  redes: Red[]=[];
  red: any;
  id?: number;

  
  constructor(private redServ: RedService, private formBuilder: FormBuilder, private httpClient: HttpClient, private ruta: Router) { 
    this.redes_form= this.formBuilder.group({
      id: [''],
      icono:['', Validators.required],
      link: ['', Validators.required],
      });
   
  }


//estos son todos métodos y validaciones
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



listarRedes(): void{
  this.redServ.getRedes().subscribe({
    next: (data) => {
      this.redes=data;
      console.log("Redes cargadas correctamente");
    },
    error: (e) => console.error(e),
    complete: () => console.info('complete')
})
}

  ngOnInit(): void {
    this.listarRedes();
  }


  cargarRed(id: number){
    this.redServ.findRed(id).subscribe({
      next: (data) => {
        this.redes_form.setValue(data);
      },
      error: (e) => console.error(e),
      complete: ()=> console.info('complete')
    });
    console.log("Red cargada correctamente");
  }


  guardarRed() {
    let red = this.redes_form.value;
    if (red.id == '') {
      this.redServ.saveRed(red).subscribe({
        next: (data) => {
          this.limpiar();
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
      window.location.reload();
      console.log("Red agregada correctamente");
    } else {
      this.redServ.editRed(red).subscribe({
        next: (data) => {
          this.limpiar();
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
      window.location.reload();
      console.log("Red modificada correctamente");
    }
  }

  borrarRed(id: number) {
    if (confirm("Confirme si desea eliminar esta red")) {
      this.redServ.deleteRed(id).subscribe(data => {});
      window.location.reload();
      console.log("Red eliminada correctamente");
    }
  }
       
  limpiar() {
    console.log("Se limpió el formulario");
    this.redes_form.reset();
  }




  
}
