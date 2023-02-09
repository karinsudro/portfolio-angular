import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url='http://localhost:8080/login';
  currentUserSubject: BehaviorSubject<any>;
  logOut: any;



  constructor(private httpClient: HttpClient) { 
    console.log("Auth está corriendo");
    this.currentUserSubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
  }


  login(credenciales:any): Observable<any>{
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    return this.httpClient.post<any>(this.url, credenciales, httpOptions).pipe(map(data=>{
      sessionStorage.setItem('currentUser', JSON.stringify(data));

      this.currentUserSubject.next(data);
      console.log("Servicio corriendo" + JSON.stringify(data));
    }));
  }


  get usuarioAutenticado(){
    return this.currentUserSubject.value;
  }


}
