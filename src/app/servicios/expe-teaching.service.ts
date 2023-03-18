import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ExpeTeaching } from '../model/expe-teaching';

@Injectable({
  providedIn: 'root'
})
export class ExpeTeachingService {

  //ruta del netbeans que trae las experiencias laborales
  //url= 'http://localhost:8080/expeTeaching/';  //se cambia x url en render
  url= 'https://portfolio-backend2-ntgp.onrender.com/expeTeaching/';
  
  constructor(private http:HttpClient) { }

  //traigo métodos del netbeans
  //ver todos
  public getExpeTeachings(): Observable<ExpeTeaching[]> {
    return this.http.get<ExpeTeaching[]>(this.url + 'lista'); //sacar +lista
  }

  //ver uno
  public findExpeTeaching(id: number): Observable<ExpeTeaching> {
    return this.http.get<ExpeTeaching>(this.url + `find/${id}`);  //sacar +find
  }

  //crear
  public saveExpeTeaching(expe: ExpeTeaching): Observable<any> {
    return this.http.post<ExpeTeaching>(this.url + 'new', expe);  //sacar new
  }

  //editar
  public updateExpeTeaching(id:number, teach: ExpeTeaching): Observable<any> {
    return this.http.put<any>(this.url + `update/${id}`, teach);    
  }
  
  //eliminar
  public deleteExpeTeaching(id: number): Observable<ExpeTeaching> {
    return this.http.delete<ExpeTeaching>(this.url + `delete/` + id);  //sacar +delete
  }

}