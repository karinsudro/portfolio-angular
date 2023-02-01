import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  editExperiencia(){
    throw new Error('Method not implemented');
  }
  
    //ruta del netbeans que trae a la persona
    url= 'http://localhost:8080/experiencia/';
    updateExperiencia:any;
  
    constructor(private httpClient:HttpClient) { }
  
  //traigo métodos del netbeans
    public verExperiencias(): Observable<Experiencia[]> {
      return this.httpClient.get<Experiencia[]>(this.url + `lista`);
    }
  
    public verExperiencia(id: number): Observable<Experiencia> {
      return this.httpClient.get<Experiencia>(this.url + `find/${id}`);
    }
  
    public crearExperiencia(exper: Experiencia): Observable<any> {
      return this.httpClient.post<Experiencia>(this.url + `new`, exper);
    }
  
    public eliminarExperiencia(id: number): Observable<Experiencia> {
      return this.httpClient.delete<Experiencia>(this.url + `delete/` + id);
    }
    
    public editarExperiencia(exper: Experiencia): Observable<any> {
      return this.httpClient.put<Experiencia>(this.url + `edit/$`, exper);
    }
}
