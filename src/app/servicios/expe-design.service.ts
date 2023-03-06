import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ExpeDesign } from '../model/expe-design';

@Injectable({
  providedIn: 'root'
})
export class ExpeDesignService {

  //ruta del netbeans que trae las experiencias laborales
  url= 'http://localhost:8080/expeDesign/';
  
  constructor(private http:HttpClient) { }

  //traigo métodos del netbeans
  //ver todos
  public getExpeDesigns(): Observable<ExpeDesign[]> {
    return this.http.get<ExpeDesign[]>(this.url + 'lista');
  }

  //ver uno
  public findExpeDesign(id: number): Observable<ExpeDesign> {
    return this.http.get<ExpeDesign>(this.url + `find/${id}`);
  }

  //crear
  public saveExpeDesign(exper: ExpeDesign): Observable<any> {
    return this.http.post<ExpeDesign>(this.url + 'new', exper);
  }

  //editar
  public updateExpeDesign(id:number, exper: ExpeDesign): Observable<any> {
    return this.http.put<any>(this.url + `update/${id}`, exper);    
  }

  //eliminar
  public deleteExpeDesign(id: number): Observable<ExpeDesign> {
    return this.http.delete<ExpeDesign>(this.url + `delete/${id}`);
  }

}
