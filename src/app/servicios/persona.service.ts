import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  persona: Persona[]=[];
  //listarPersonas: any;
  personaServ: any;
  //ruta del netbeans que trae a la persona
  //url= 'http://localhost:8080/persona/';  //reemplazar x ruta render
  url= 'https://portfolio-backend2-1iv6.onrender.com/persona/';


  constructor(private http:HttpClient) { }

  //traigo métodos del netbeans
  //ver todos
  public getPersonas(): Observable<any> {
    return this.http.get<Persona[]>(this.url + 'lista');  //con render (this.url)
  }

  //ver uno
  public findPersona(id: number): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.url + `find/${id}`);   //(this.url + `/${id}`)
  }

  //crear
   public savePersona(per: Persona): Observable<any> {
    return this.http.post<any>(this.url + 'new', per);   //(this.url, persona)
  } 

  //editar
  public updatePersona(id:number, per: Persona): Observable<any> {
    return this.http.put<any>(this.url + `update/${id}`, per);    
  }

  //eliminar
  public deletePersona(id: number): Observable<Persona> {
    return this.http.delete<Persona>(this.url + `delete/` + id);   //(this.url + `/${id}`)
  } 

}