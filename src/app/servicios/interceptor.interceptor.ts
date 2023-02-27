import { Injectable } from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})


export class InterceptorInterceptor implements HttpInterceptor {

  constructor(private autenService:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    var currentUser = this.autenService.usuarioAutenticado;
    if(currentUser && currentUser.id){
      request.clone({
        setHeaders:{
          Authorization: `Bearer${currentUser.id}`  //retorna datos de la persona
        }
      })
    }
   // console.log("Interceptor corriendo " + JSON.stringify(currentUser));
    return next.handle(request);
  }
}
