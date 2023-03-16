import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})


export class ProjectService {
  
  //ruta del netbeans que trae los proyectos
  //url= 'http://localhost:8080/project/';
  url= 'https://portfolio-backend2-1iv6.onrender.com/project/';

  constructor(private http:HttpClient) { }
  
  //traigo métodos del netbeans
  //ver todods
  public getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.url + 'lista');
  }

  //ver uno
  public findProject(id: number): Observable<Project> {
    return this.http.get<Project>(this.url + `find/${id}`);
  }

  //crear
  public saveProject(proj: Project): Observable<any> {
    return this.http.post<Project>(this.url + 'new', proj);
  }

  //editar  
  public updateProject(id:number, proj: Project): Observable<any> {
    return this.http.put<any>(this.url + `update/${id}`, proj);    
  }
  
  //eliminar
  public deleteProject(id: number): Observable<Project> {
    return this.http.delete<Project>(this.url + `delete/` + id);
  }
  
}
