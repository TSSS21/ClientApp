import { login } from '../store/user.selectors';
import { SharedService } from 'src/app/Services/shared-service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as UserAction from 'src/app/store/user.actions';
import * as fromUser from 'src/app/store/user.selectors';
import { User } from '../Models/User';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  token:any
  loginForm: FormGroup;
  user: User;


  constructor(private fb: FormBuilder,private service:SharedService,private router:Router, private store: Store<User>) {

    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  get primEmail() {
    return this.loginForm.get('email')
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  }
  onSubmit() {
    this.store.dispatch(new UserAction.LogIn(this.loginForm.value)); //action dispatched
    this.store.pipe(select(fromUser.login)).subscribe(data => {
      debugger
      this.token = data;

        if(this.token.token!=null){
          localStorage.setItem('token',this.token.token);
      this.router.navigate(['/Users']);
    }});


  }




  //   this.service.login(this.loginForm.value).subscribe(data=>{
  //     debugger
  //   this.token=data;
  //   localStorage.setItem('token',this.token.token);
  //   debugger
  //   const token=localStorage.getItem('token')
  //   console.log(token)
  //   if(token!=null){
  //     this.router.navigate(['/getUser']);
  //   }
  //   })
  // }

}
