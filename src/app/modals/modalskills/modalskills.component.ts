import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/servicios/skill.service';

@Component({
  selector: 'app-modalskills',
  templateUrl: './modalskills.component.html',
  styleUrls: ['./modalskills.component.css']
})
export class ModalskillsComponent implements OnInit {
  skills_form!: FormGroup;
  skills:Skill[]=[];
  skill: any;
  id?: number;

  titulo= "Hard & Soft Skills";


  constructor(private httpClient: HttpClient, private skillServ: SkillService, private formBuilder: FormBuilder, private ruta: Router) { 
    this.skills_form= this.formBuilder.group({
      id: [''],
      skill_tipo:['', Validators.required],
      skill:['', [Validators.required, Validators.minLength(2)]],
      icono: [''],
      progreso:['', [Validators.required, Validators.min(0), Validators.max(100)]],
      color:['',Validators.required],
      });
    
  }

  ngOnInit(): void {
    this.getSkills();
  }


  //campos y validaciones
  get Skill_tipo(){
    return this.skills_form.get("skill_tipo");
  }
  get Skill_tipoValid() {
    return this.Skill_tipo?.touched && !this.Skill_tipo?.valid;
  }

  get Skill(){
   return this.skills_form.get("skill");
  }
  get SkillValid() {
    return this.Skill?.touched && !this.Skill?.valid;
  }

  get Icono(){
   return this.skills_form.get("icono");
  }
  get IconoValid() {
    return this.Icono?.touched && !this.Icono?.valid;
  }

  get Progreso(){
   return this.skills_form.get("progreso");
  }
  get ProgresoValid() {
    return this.Progreso?.touched && !this.Progreso?.valid;
  }

  get Color(){
   return this.skills_form.get("color");
  }
  get ColorValid() {
    return this.Color?.touched && !this.Color?.valid;
  }


  getSkills(): void{
   this.skillServ.getSkills().subscribe({next: (data) => {
     this.skills = data;
     console.log("Skills cargados correctamente");
   },
   error: (e) => console.error(e),
   complete: () => console.info("completo")
   })
  }


  findSkill(id: number){
    this.skillServ.findSkill(id).subscribe({
      next: (data) => {
        this.skills_form.setValue(data);
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
    console.log("Skill cargado correctamente");
  }

  saveSkill() {
    let skill = this.skills_form.value;
    if (skill.id == '') {
      this.skillServ.saveSkill(skill).subscribe({
        next: (data) => {
          this.reset();
        },
        error: (e) => console.error(e),
        //complete: () => console.info('complete')
      });
      window.location.reload();
      alert("Skill agregado correctamente");
    } else {
      this.skillServ.updateSkill(skill.id, skill).subscribe({
        next: (data) => {
          this.reset();
        },
        error: (e) => console.error(e),
        //complete: () => console.info('complete')
      });
      window.location.reload();
      alert("Skill modificado correctamente");
    }
  }
  
  deleteSkill(id: number) {
    if (confirm("Desea eliminar este skill?")) {
      this.skillServ.deleteSkill(id).subscribe(data => {});
      window.location.reload();
      alert("Skill eliminado correctamente");
    }
  }

  reset(): void {
    this.skills_form.reset();
  }

  back(){
    this.ruta.navigate(['/aadmin']);
  }
  


}
