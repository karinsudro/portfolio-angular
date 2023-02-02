import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  //ruta del netbeans que trae a la persona
    url= 'http://localhost:8080/experiencia/';
    updateExperiencia:any;
  
    constructor(private httpClient:HttpClient) { }
  
  //traigo métodos del netbeans
  //ver todos
    public getExperiencias(): Observable<Experiencia[]> {
      return this.httpClient.get<Experiencia[]>(this.url + `lista`);
    }
  //ver uno
    public findExperiencia(id: number): Observable<Experiencia> {
      return this.httpClient.get<Experiencia>(this.url + `find/${id}`);
    }
  //crear
    public saveExperiencia(exper: Experiencia): Observable<any> {
      return this.httpClient.post<Experiencia>(this.url + `new`, exper);
    }
  //eliminar
    public deleteExperiencia(id: number): Observable<Experiencia> {
      return this.httpClient.delete<Experiencia>(this.url + `delete/` + id);
    }
  //editar
    public editExperiencia(exper: Experiencia): Observable<any> {
      return this.httpClient.put<Experiencia>(this.url + `edit/$`, exper);
    }
}
