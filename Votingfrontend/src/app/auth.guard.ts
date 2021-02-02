import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router,RouterModule } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private route:Router)
  {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      //Authenticate and autherisation code here
      if(sessionStorage.getItem('email') && sessionStorage.getItem('password') )
      return true;
      else{
        this.route.navigate(['student']); 
        return false;       
      }
    }
  }
