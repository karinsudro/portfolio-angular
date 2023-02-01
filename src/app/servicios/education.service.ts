import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../model/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  editEducation(){
    throw new Error('Method not implemented');
  }
  
    //ruta del netbeans que trae a la persona
    url= 'http://localhost:8080/education/';
    updateEducation:any;
  
    constructor(private httpClient:HttpClient) { }
  
  //traigo métodos del netbeans
    public verEducations(): Observable<Education[]> {
      return this.httpClient.get<Education[]>(this.url + `lista`);
    }
  
    public verEducation(id: number): Observable<Education> {
      return this.httpClient.get<Education>(this.url + `find/${id}`);
    }
  
    public crearEducation(educ: Education): Observable<any> {
      return this.httpClient.post<Education>(this.url + `new`, educ);
    }
  
    public eliminarEducation(id: number): Observable<Education> {
      return this.httpClient.delete<Education>(this.url + `delete/` + id);
    }
    
    public editarEducation(educ: Education): Observable<any> {
      return this.httpClient.put<Education>(this.url + `edit/$`, educ);
    }
}
