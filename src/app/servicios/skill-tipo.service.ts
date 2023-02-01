import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SkillTipo } from '../model/skill-tipo';

@Injectable({
  providedIn: 'root'
})
export class SkillTipoService {

  editSkillTipo(){
    throw new Error('Method not implemented');
  }
  
    //ruta del netbeans que trae a la persona
    url= 'http://localhost:8080/skillTipo/';
    updateSkillTipo:any;
  
    constructor(private httpClient:HttpClient) { }
  
  //traigo métodos del netbeans
    public verSkillTipos(): Observable<SkillTipo[]> {
      return this.httpClient.get<SkillTipo[]>(this.url + `lista`);
    }
  
    public verSkillTipo(id: number): Observable<SkillTipo> {
      return this.httpClient.get<SkillTipo>(this.url + `find/${id}`);
    }
  
    public crearSkillTipo(habil: SkillTipo): Observable<any> {
      return this.httpClient.post<SkillTipo>(this.url + `new`, habil);
    }
  
    public eliminarSkillTipo(id: number): Observable<SkillTipo> {
      return this.httpClient.delete<SkillTipo>(this.url + `delete/` + id);
    }
    
    public editarSkillTipo(habil: SkillTipo): Observable<any> {
      return this.httpClient.put<SkillTipo>(this.url + `edit/$`, habil);
    }
}
