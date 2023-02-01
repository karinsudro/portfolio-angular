import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  editSkill(){
    throw new Error('Method not implemented');
  }
  
    //ruta del netbeans que trae a la persona
    url= 'http://localhost:8080/skill/';
    updateSkill:any;
  
    constructor(private httpClient:HttpClient) { }
  
  //traigo métodos del netbeans
    public verSkills(): Observable<Skill[]> {
      return this.httpClient.get<Skill[]>(this.url + `lista`);
    }
  
    public verSkill(id: number): Observable<Skill> {
      return this.httpClient.get<Skill>(this.url + `find/${id}`);
    }
  
    public crearSkill(skill: Skill): Observable<any> {
      return this.httpClient.post<Skill>(this.url + `new`, skill);
    }
  
    public eliminarSkill(id: number): Observable<Skill> {
      return this.httpClient.delete<Skill>(this.url + `delete/` + id);
    }
    
    public editarSkill(skill: Skill): Observable<any> {
      return this.httpClient.put<Skill>(this.url + `edit/$`, skill);
    }
}
