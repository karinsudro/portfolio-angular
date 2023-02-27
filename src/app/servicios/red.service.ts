import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Red } from '../model/red';

@Injectable({
  providedIn: 'root'
})


export class RedService {

  //ruta del netbeans que trae las redes
   url= 'http://localhost:8080/red/';

   constructor(private httpClient:HttpClient) { }
  
  //traigo métodos del netbeans
  //ver todos
    public getRedes(): Observable<Red[]> {
      return this.httpClient.get<Red[]>(this.url + 'lista');
    }

  //ver uno
    public findRed(id: number): Observable<Red> {
      return this.httpClient.get<Red>(this.url + `find/${id}`);
    }

  //crear
    public saveRed(red: Red): Observable<any> {
      return this.httpClient.post<any>(this.url + 'new', red);
    }

    //editar
    public updateRed(id:number, red: Red): Observable<any> {
      return this.httpClient.put<any>(this.url + `update/${id}`, red);    
    }
    
  //eliminar
    public deleteRed(id: number): Observable<Red> {
      return this.httpClient.delete<Red>(this.url + `delete/` + id);
    }
  
}

/* 
public updateRed(red: Red): Observable<any> {
  return this.httpClient.put<Red>(this.url + `edit/$`, red);    
} */