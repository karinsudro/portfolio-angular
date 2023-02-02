import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../model/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  //ruta del netbeans que trae a la persona
    url= 'http://localhost:8080/categoria/';
    updateCategoria:any;
  
    constructor(private httpClient:HttpClient) { }
  
  //traigo métodos del netbeans
  //vet todos
    public getCategorias(): Observable<Categoria[]> {
      return this.httpClient.get<Categoria[]>(this.url + `lista`);
    }
  //ver uno
    public findCategoria(id: number): Observable<Categoria> {
      return this.httpClient.get<Categoria>(this.url + `find/${id}`);
    }
  //crear
    public saveCategoria(categ: Categoria): Observable<any> {
      return this.httpClient.post<Categoria>(this.url + `new`, categ);
    }
  //eliminar
    public deleteCategoria(id: number): Observable<Categoria> {
      return this.httpClient.delete<Categoria>(this.url + `delete/` + id);
    }
  //editar
    public editCategoria(categ: Categoria): Observable<any> {
      return this.httpClient.put<Categoria>(this.url + `edit/$`, categ);
    }
}
