import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

editPersona(){
  throw new Error('Method not implemented');
}

  //ruta del netbeans que trae a la persona
  url= 'http://localhost:8080/persona/';
  updatePersona:any;

  constructor(private httpClient:HttpClient) { }

//traigo métodos del netbeans
  public verPersonas(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.url + `lista`);
  }

  public verPersona(id: number): Observable<Persona> {
    return this.httpClient.get<Persona>(this.url + `find/${id}`);
  }

  public crearPersona(per: Persona): Observable<any> {
    return this.httpClient.post<Persona>(this.url + `new`, per);
  }

  public eliminarPersona(id: number): Observable<Persona> {
    return this.httpClient.delete<Persona>(this.url + `delete/` + id);
  }
  
  public editarPersona(per: Persona): Observable<any> {
    return this.httpClient.put<Persona>(this.url + `edit/$`, per);
  }




}
