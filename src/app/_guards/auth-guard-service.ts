import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public auth: AuthService, public router: Router) {}
  canActivate(): boolean {
    debugger
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
