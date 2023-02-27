import { HttpClient } from '@angular/common/http';
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

  url= 'http://localhost:8080/login';


  constructor(private httpClient: HttpClient) { }


  public getLogins(): Observable<LoginComponent[]>{
    return this.httpClient.get<any[]>(this.url);
  }

  public findLogin(id: number): Observable<LoginComponent>{
    return this.httpClient.get<LoginComponent>(this.url + '/${id}');
  }

  public saveLogin(login: LoginComponent): Observable<any>{
    return this.httpClient.post<any>(this.url, login);
  }

  public updateLogin(id: number, login: LoginComponent): Observable<any>{
    return this.httpClient.put<any>(this.url, login);
  }

  public deleteLogin(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + '/${id}');
  }

}
