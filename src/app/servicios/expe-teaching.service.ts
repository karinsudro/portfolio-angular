import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ExpeTeaching } from '../model/expe-teaching';

@Injectable({
  providedIn: 'root'
})
export class ExpeTeachingService {

  //ruta del netbeans que trae las experiencias laborales
  url= 'http://localhost:8080/expeTeaching/';
  
  constructor(private httpClient:HttpClient) { }

//traigo métodos del netbeans
//ver todos
  public getExpeTeachings(): Observable<ExpeTeaching[]> {
    return this.httpClient.get<ExpeTeaching[]>(this.url + `lista`);
  }
//ver uno
  public findExpeTeaching(id: number): Observable<ExpeTeaching> {
    return this.httpClient.get<ExpeTeaching>(this.url + `find/${id}`);
  }
//crear
  public saveExpeTeaching(expe: ExpeTeaching): Observable<any> {
    return this.httpClient.post<ExpeTeaching>(this.url + `new`, expe);
  }
//eliminar
  public deleteExpeTeaching(id: number): Observable<ExpeTeaching> {
    return this.httpClient.delete<ExpeTeaching>(this.url + `delete/` + id);
  }
//editar
  public editExpeTeaching(expe: ExpeTeaching): Observable<any> {
    return this.httpClient.put<ExpeTeaching>(this.url + `edit/$`, expe);
  }


}