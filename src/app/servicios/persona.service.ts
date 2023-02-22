import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  //persona: Persona[]=[];
  //listarPersonas: any;
  //sPersona: any;

  //ruta del netbeans que trae a la persona
  url= 'http://localhost:8080/persona/';  //reemplazar x ruta render


  constructor(private httpClient:HttpClient) { }

//traigo métodos del netbeans
//ver todos
  public getPersonas(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.url + `lista`);  //con render (this.url)
  }
//ver uno
  public findPersona(id: number): Observable<Persona> {
    return this.httpClient.get<Persona>(this.url + `find/${id}`);   //(this.url + `/${id}`)
  }
//crear
  public savePersona(per: Persona): Observable<any> {
    return this.httpClient.post<Persona>(this.url + 'new', per);   //(this.url, persona)
  }
//eliminar
  public deletePersona(id: number): Observable<Persona> {
    return this.httpClient.delete<Persona>(this.url + 'delete/' + id);   //(this.url + `/${id}`)
  }
  //editar
  public editPersona(per: Persona): Observable<any> {
    return this.httpClient.put<Persona>(this.url + `edit/$`, per);   //(this.url, persona)
  }




}
