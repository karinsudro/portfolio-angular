import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SkillTipo } from '../model/skill-tipo';

@Injectable({
  providedIn: 'root'
})
export class SkillTipoService {

  //ruta del netbeans que trae a la persona
    url= 'http://localhost:8080/skillTipo/';
    updateSkillTipo:any;
  
    constructor(private httpClient:HttpClient) { }
  
  //traigo métodos del netbeans
  //ver todos
    public getSkillTipos(): Observable<SkillTipo[]> {
      return this.httpClient.get<SkillTipo[]>(this.url + `lista`);
    }
  //ver uno
    public findSkillTipo(id: number): Observable<SkillTipo> {
      return this.httpClient.get<SkillTipo>(this.url + `find/${id}`);
    }
  //crear
    public saveSkillTipo(habil: SkillTipo): Observable<any> {
      return this.httpClient.post<SkillTipo>(this.url + `new`, habil);
    }
  //eliminar
    public deleteSkillTipo(id: number): Observable<SkillTipo> {
      return this.httpClient.delete<SkillTipo>(this.url + `delete/` + id);
    }
  //editar
    public editSkillTipo(habil: SkillTipo): Observable<any> {
      return this.httpClient.put<SkillTipo>(this.url + `edit/$`, habil);
    }
}
