import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as UserAction from 'src/app/store/user.actions';
import * as fromUser from 'src/app/store/user.selectors';
import { User } from '../Models/User';
import { SharedService } from '../Services/shared-service';
@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  detailUser: FormGroup;
  id: string
  userData:any;
  constructor(private _fb: FormBuilder,private route: ActivatedRoute,private store: Store<User>,private ser:SharedService) {
    this.detailUser = this._fb.group({
      id: ['', [Validators.required]],
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required,Validators.email])
    });
  }
  ngOnInit() {

    debugger
     this.id = this.route.snapshot.paramMap.get('id')
     this.getUserById();



    // this.ser.getUserById(this.id).subscribe(x=>{
    //   debugger
    //   this.userData=x;
    //   this.editUser.setValue(this.userData.data);
    // })
  }
  getUserById(){
    this.route.params.subscribe(params => {
      this.store.dispatch(new UserAction.GetUser(+params.id));
    });
     this.store.select(fromUser.getUserById).subscribe(data => {
       debugger
      this.userData = data;
      this.userData = data;
      if(this.userData.length!=0){
        if(this.userData.data.length>0){
            this.userData = this.userData.data.filter(x => x.id ==  Number(this.id));
          }
          else{
            this.detailUser.setValue(this.userData.data);
          }

      }
       });
  }
  updateUser(){

  }
  onNoClick(){

  }

}
