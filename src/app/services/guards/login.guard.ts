import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor( public userService: UserService, public router: Router){}

  canActivate() {
   if( this.userService.estaLogueado()){
    return true;
   }else {
     console.log('esta bloqueado por el guard')
     this.router.navigate(['/login'])
     return false;
   }

  }

}
