/* import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginComponent } from '../componentes/login/login.component';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  loginServ: any;
  login: any;

  obtenerDatosLogin(){
    this.loginServ.obtenerDatosLogin().subscribe((data: string) =>{
      console.log("Login" + data);
    }, (error: any) => console.log(error));
  }

  //url= 'http://localhost:8080/auth/login';
  url= 'https://portfolio-backend2-ntgp.onrender.com/auth/login';
  


  constructor(private http: HttpClient) { }


  public getLogins(): Observable<LoginComponent[]>{
    return this.http.get<any[]>(this.url);
  }

  public findLogin(id: number): Observable<LoginComponent>{
    return this.http.get<LoginComponent>(this.url + '/${id}');
  }

  public saveLogin(login: LoginComponent): Observable<any>{
    return this.http.post<any>(this.url, login);
  }

  public updateLogin(id: number, login: LoginComponent): Observable<any>{
    return this.http.put<any>(this.url, login);
  }

  public deleteLogin(id: number): Observable<any>{
    return this.http.delete<any>(this.url + '/${id}');
  } 

}
  */