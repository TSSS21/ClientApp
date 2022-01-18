import { SharedService } from 'src/app/Services/shared-service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as UserAction from 'src/app/store/user.actions';
import * as fromUser from 'src/app/store/user.selectors';
import { User } from '../Models/User';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  editUser: FormGroup;
  id: string
  userData:any;
  constructor(private _fb: FormBuilder,private route: ActivatedRoute,private store: Store<User>,
    private ser:SharedService,private router:Router) {
    this.editUser = this._fb.group({
      id: ['', [Validators.required]],
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required,Validators.email]),
      avatar: new FormControl('')
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
      if(this.userData.length!=0){
        if(this.userData.data.length>0){
            this.userData = this.userData.data.filter(x => x.id ==  Number(this.id));
          }
          else{
            this.editUser.setValue(this.userData.data);
          }

      }

      // if(this.userData.data.length>0){
      //   this.userData = this.userData.data.filter(x => x.id ==  Number(this.id));
      //   this.editUser.setValue(this.userData[0]);
      // }





       });
  }
  updateUser(){
    debugger
    this.ser.user_data=this.editUser.value;
    this.router.navigate(['/Users']);

  }
  onNoClick(){

  }

}
