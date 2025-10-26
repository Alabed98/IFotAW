import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot,  } from '@angular/router';
import { LoginService } from './login.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private loginService:LoginService, private router:Router){}

  canActivate():boolean {
    if(this.loginService.isAuthenticated()){
      return true
    }
    else{
      this.router.navigate(['/login'])
      return false;
    }


  }
};
