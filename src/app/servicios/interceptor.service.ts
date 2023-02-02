import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private authService: AuthService) { 

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
      let currentUser= this.authService.usuarioAutenticado;
      if(currentUser && currentUser.id){
        req.clone({
          setHeaders:{
            Authorization: `Bearer ${currentUser.id}`  //retorna datos de la persona
          },
        });
      }
      console.log("Interceptor corriendo" + JSON.stringify(currentUser));
      return next.handle(req);
    }
  }
}
