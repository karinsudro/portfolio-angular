import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Red } from '../model/red';

@Injectable({
  providedIn: 'root'
})


export class RedService {

  //ruta del netbeans que trae las redes
   //url= 'http://localhost:8080/red/';
   url= 'https://portfolio-backend2-ntgp.onrender.com/red/';

   constructor(private http:HttpClient) { }
  
  //traigo métodos del netbeans
  //ver todos
    public getRedes(): Observable<Red[]> {
      return this.http.get<Red[]>(this.url + 'lista');
    }

  //ver uno
    public findRed(id: number): Observable<Red> {
      return this.http.get<Red>(this.url + `find/${id}`);
    }

  //crear
    public saveRed(red: Red): Observable<any> {
      return this.http.post<any>(this.url + 'new', red);
    }

    //editar
    public updateRed(id:number, red: Red): Observable<any> {
      return this.http.put<any>(this.url + `update/${id}`, red);    
    }
    
  //eliminar
    public deleteRed(id: number): Observable<Red> {
      return this.http.delete<Red>(this.url + `delete/` + id);
    }
  
}
