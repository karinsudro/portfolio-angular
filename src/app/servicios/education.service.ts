import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../model/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  //ruta del netbeans que trae los estudios
    url= 'http://localhost:8080/education/'; //reemplazar x ruta render
  
    constructor(private httpClient:HttpClient) { }
  
  //traigo métodos del netbeans
  //vet todos
    public getEducations(): Observable<Education[]> {
      return this.httpClient.get<Education[]>(this.url + `lista`);
    }
  //ver uno
    public findEducation(id: number): Observable<Education> {
      return this.httpClient.get<Education>(this.url + `find/${id}`);
    }
  //crear
    public saveEducation(educ: Education): Observable<any> {
      return this.httpClient.post<Education>(this.url + `new`, educ);
    }
  //eliminar
    public deleteEducation(id: number): Observable<Education> {
      return this.httpClient.delete<Education>(this.url + `delete/` + id);
    }
  //editar
    public editEducation(educ: Education): Observable<any> {
      return this.httpClient.put<Education>(this.url + `edit/$`, educ);
    }
}
