import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})


export class ProjectService {
  
    //ruta del netbeans que trae a la persona
    url= 'http://localhost:8080/project/';
    updateProject:any;
  
    constructor(private httpClient:HttpClient) { }
  
  //traigo métodos del netbeans
  //ver todods
    public getProjects(): Observable<Project[]> {
      return this.httpClient.get<Project[]>(this.url + `lista`);
    }
  //ver uno
    public findProject(id: number): Observable<Project> {
      return this.httpClient.get<Project>(this.url + `find/${id}`);
    }
  //crear
    public saveProject(proj: Project): Observable<any> {
      return this.httpClient.post<Project>(this.url + `new`, proj);
    }
  //eliminar
    public deleteProject(id: number): Observable<Project> {
      return this.httpClient.delete<Project>(this.url + `delete/` + id);
    }
  //editar  
    public editProject(proj: Project): Observable<any> {
      return this.httpClient.put<Project>(this.url + `edit/$`, proj);
    }
}
