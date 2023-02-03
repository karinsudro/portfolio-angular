import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { About } from '../model/about';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

    //ruta del netbeans que trae a la persona
    url= 'http://localhost:8080/persona/';  //reemplazar x ruta render


    constructor(private httpClient:HttpClient) { }
  
  //traigo métodos del netbeans
  //ver todos
    public getAbouts(): Observable<About[]> {
      return this.httpClient.get<About[]>(this.url + `lista`);
    }
  //ver uno
    public findAbout(id: number): Observable<About> {
      return this.httpClient.get<About>(this.url + `find/${id}`);
    }
  //crear
    public saveAbout(acerca: About): Observable<any> {
      return this.httpClient.post<About>(this.url + `new`, acerca);
    }
  //eliminar
    public deleteAbout(id: number): Observable<About> {
      return this.httpClient.delete<About>(this.url + `delete/` + id);
    }
    //editar
    public editAbout(acerca: About): Observable<any> {
      return this.httpClient.put<About>(this.url + `edit/$`, acerca);
    }
  
  






}
