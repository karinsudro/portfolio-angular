import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(private autenService: AuthService, private ruta: Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let currentUser= this.autenService.usuarioAutenticado;

    if(currentUser && currentUser.id){
      return true;
    }else{
      //JOsman tiene this.ruta comentado y return true, Marie lo descomentó y el return en false. Ver cuál me sirve!!!
      this.ruta.navigate(['/login']);
      return false;
    }
  }
  
}
