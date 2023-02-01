import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Red } from '../model/red';

@Injectable({
  providedIn: 'root'
})
export class RedService {

  editRed(){
    throw new Error('Method not implemented');
  }
  
    //ruta del netbeans que trae a la persona
    url= 'http://localhost:8080/red/';
    updateRed:any;
  
    constructor(private httpClient:HttpClient) { }
  
  //traigo métodos del netbeans
    public verRedes(): Observable<Red[]> {
      return this.httpClient.get<Red[]>(this.url + `lista`);
    }
  
    public verRed(id: number): Observable<Red> {
      return this.httpClient.get<Red>(this.url + `find/${id}`);
    }
  
    public crearRed(red: Red): Observable<any> {
      return this.httpClient.post<Red>(this.url + `new`, red);
    }
  
    public eliminarRed(id: number): Observable<Red> {
      return this.httpClient.delete<Red>(this.url + `delete/` + id);
    }
    
    public editarRed(red: Red): Observable<any> {
      return this.httpClient.put<Red>(this.url + `edit/$`, red);
    }
}
