import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ExpeTeaching } from '../model/expe-teaching';

@Injectable({
  providedIn: 'root'
})
export class ExpeTeachingService {

  //ruta del netbeans que trae las experiencias laborales
  url= 'http://localhost:8080/expeTeaching/';  //se cambia x url en render
  
  constructor(private httpClient:HttpClient) { }

  //traigo métodos del netbeans
  //ver todos
  public getExpeTeachings(): Observable<ExpeTeaching[]> {
    return this.httpClient.get<ExpeTeaching[]>(this.url + 'lista'); //sacar +lista
  }

  //ver uno
  public findExpeTeaching(id: number): Observable<ExpeTeaching> {
    return this.httpClient.get<ExpeTeaching>(this.url + `find/${id}`);  //sacar +find
  }

  //crear
  public saveExpeTeaching(expe: ExpeTeaching): Observable<any> {
    return this.httpClient.post<ExpeTeaching>(this.url + 'new', expe);  //sacar new
  }

  //editar
  public updateExpeTeaching(id:number, teach: ExpeTeaching): Observable<any> {
    return this.httpClient.put<any>(this.url + `update/${id}`, teach);    
  }
  
  //eliminar
  public deleteExpeTeaching(id: number): Observable<ExpeTeaching> {
    return this.httpClient.delete<ExpeTeaching>(this.url + `delete/` + id);  //sacar +delete
  }

}