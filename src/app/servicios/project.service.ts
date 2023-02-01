import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  editProject(){
    throw new Error('Method not implemented');
  }
  
    //ruta del netbeans que trae a la persona
    url= 'http://localhost:8080/project/';
    updateProject:any;
  
    constructor(private httpClient:HttpClient) { }
  
  //traigo métodos del netbeans
    public verProjects(): Observable<Project[]> {
      return this.httpClient.get<Project[]>(this.url + `lista`);
    }
  
    public verProject(id: number): Observable<Project> {
      return this.httpClient.get<Project>(this.url + `find/${id}`);
    }
  
    public crearProject(proj: Project): Observable<any> {
      return this.httpClient.post<Project>(this.url + `new`, proj);
    }
  
    public eliminarProject(id: number): Observable<Project> {
      return this.httpClient.delete<Project>(this.url + `delete/` + id);
    }
    
    public editarProject(proj: Project): Observable<any> {
      return this.httpClient.put<Project>(this.url + `edit/$`, proj);
    }
}
