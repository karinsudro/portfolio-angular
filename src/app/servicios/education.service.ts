import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../model/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  //ruta del netbeans que trae los estudios
  //url= 'http://localhost:8080/education/'; //reemplazar x ruta render
  url= 'https://portfolio-backend2-ntgp.onrender.com/education/';

  constructor(private http:HttpClient) { }
  
  //traigo métodos del netbeans
  //ver todos
  public getEducations(): Observable<Education[]> {
    return this.http.get<Education[]>(this.url + 'lista');
  }

  //ver uno
  public findEducation(id: number): Observable<Education> {
    return this.http.get<Education>(this.url + `find/${id}`);
  }

  //crear
  public saveEducation(educ: Education): Observable<any> {
    return this.http.post<Education>(this.url + 'new', educ);
  }

  //editar
  public updateEducation(id:number, educ: Education): Observable<any> {
    return this.http.put<any>(this.url + `update/${id}`, educ);    
  }

  //eliminar
  public deleteEducation(id: number): Observable<Education> {
    return this.http.delete<Education>(this.url + `delete/` + id);
  }
  
}
