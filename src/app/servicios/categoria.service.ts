import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../model/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  editCategoria(){
    throw new Error('Method not implemented');
  }
  
    //ruta del netbeans que trae a la persona
    url= 'http://localhost:8080/categoria/';
    updateCategoria:any;
  
    constructor(private httpClient:HttpClient) { }
  
  //traigo métodos del netbeans
    public verCategorias(): Observable<Categoria[]> {
      return this.httpClient.get<Categoria[]>(this.url + `lista`);
    }
  
    public verCategoria(id: number): Observable<Categoria> {
      return this.httpClient.get<Categoria>(this.url + `find/${id}`);
    }
  
    public crearCategoria(categ: Categoria): Observable<any> {
      return this.httpClient.post<Categoria>(this.url + `new`, categ);
    }
  
    public eliminarCategoria(id: number): Observable<Categoria> {
      return this.httpClient.delete<Categoria>(this.url + `delete/` + id);
    }
    
    public editarCategoria(categ: Categoria): Observable<any> {
      return this.httpClient.put<Categoria>(this.url + `edit/$`, categ);
    }
}
