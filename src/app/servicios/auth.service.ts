import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //private url = 'http://localhost:8080/login'; // Reemplazar x render y sacar private acá
  
  //url = 'http://localhost:8080/persona/auth/login'  
  url = 'https://portfolio-backend2-ntgp.onrender.com/persona/auth/login'
  //url = 'https://portfolio-backend2-ntgp.onrender.com/login'
  
  currentUserSubject: BehaviorSubject<any>; //cdo suba a render

  
  constructor(private http: HttpClient) { 
   console.log('Auth está corriendo');
   this.currentUserSubject=new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
  }
  
  login(credenciales: any): Observable<any>{
    //console.log(credenciales);
    var httpOptions={
      headers:new HttpHeaders({
        'ContentType':'application/json'
      })
    }
    return this.http.post<any>(this.url, credenciales, httpOptions).pipe(map(data=> {
        sessionStorage.setItem('currentUser',JSON.stringify(data));
        this.currentUserSubject.next(data);
        //console.log("authService está corriendo " + JSON.stringify(data));
        return data;
      }));
   }

  
  get usuarioAutenticado() {
    return this.currentUserSubject.value;
  }
}

