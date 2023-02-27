import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //private url = 'http://localhost:8080/login'; // Reemplazar x render y sacar private acá
  url = 'http://localhost:8080/auth/login'  //empieza con private?
  //private currentUserSubject: BehaviorSubject<any> = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
  currentUserSubject: BehaviorSubject<any>; //cdo suba a render

  constructor(private http: HttpClient) { 
   // console.log('Auth está corriendo');
   this.currentUserSubject=new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
  }
  
  loginPersona(credenciales: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(this.url, credenciales, httpOptions).pipe(
      map(data => {
        sessionStorage.setItem('currentUser', JSON.stringify(data));
        this.currentUserSubject.next(data);
        console.log(`Servicio está corriendo: ${JSON.stringify(data)}`);
        return data;
      })
    );
  }

  get usuarioAutenticado() {
    return this.currentUserSubject.value;
  }
}

