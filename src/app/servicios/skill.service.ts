import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})


export class SkillService {
  
    //ruta del netbeans que trae las habilidades
    url= 'http://localhost:8080/skill/';  //en render la url lleva /skill
  
    constructor(private http:HttpClient) { }
  
  //traigo métodos del netbeans
  //ver todos
  public getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.url + 'lista');
  }
  
  //ver uno
  public findSkill(id: number): Observable<Skill> {
    return this.http.get<Skill>(this.url + `find/${id}`);
  }

  //crear
  public saveSkill(skill: Skill): Observable<any> {
    return this.http.post<Skill>(this.url + 'new', skill);
  }
  
  //editar
  public updateSkill(id:number, skill: Skill): Observable<any> {
    return this.http.put<any>(this.url + `update/${id}`, skill);    
  }

  //eliminar
  public deleteSkill(id: number): Observable<Skill> {
    return this.http.delete<Skill>(this.url + `delete/` + id);
  }
}
