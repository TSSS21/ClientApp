import { Injectable } from '@angular/core';
// import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class  AuthService{
  //jwtHelper = new JwtHelperService();
  constructor() {}
  // ...
  public isAuthenticated(): boolean {
    debugger
    const token = localStorage.getItem('token');
    if(token!=null){
      return true;
    }
    return false;
  }
}
