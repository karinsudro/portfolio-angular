import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})


export class SkillService {
  
    //ruta del netbeans que trae las habilidades
    url= 'http://localhost:8080/skill/';
  
    constructor(private httpClient:HttpClient) { }
  
  //traigo métodos del netbeans
  //ver todos
    public getSkills(): Observable<Skill[]> {
      return this.httpClient.get<Skill[]>(this.url + `lista`);
    }
  //ver uno
    public findSkill(id: number): Observable<Skill> {
      return this.httpClient.get<Skill>(this.url + `find/${id}`);
    }
  //crear
    public saveSkill(skill: Skill): Observable<any> {
      return this.httpClient.post<Skill>(this.url + `new`, skill);
    }
  //eliminar
    public deleteSkill(id: number): Observable<Skill> {
      return this.httpClient.delete<Skill>(this.url + `delete/` + id);
    }
  //editar
    public editSkill(skill: Skill): Observable<any> {
      return this.httpClient.put<Skill>(this.url + `edit/$`, skill);
    }
}
