import { EditUserComponent } from './../edit-user/edit-user.component';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../Services/shared-service';
import { Store, select } from '@ngrx/store';
import * as UserAction from 'src/app/store/user.actions';
import * as fromUser from 'src/app/store/user.selectors';
import { User } from '../Models/User';
import { MatDialog } from '@angular/material';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {
  dataSource: any;
  constructor(private service: SharedService, private store: Store<User>,public dialog: MatDialog) { }

  ngOnInit() {
    this.getAllUser()
  }
  getAllUser() {
    this.store.dispatch(new UserAction.LoadUsers); //action dispatched
    this.store.pipe(select(fromUser.getUsers)).subscribe(data => {
      debugger
      this.dataSource = data;
      this.dataSource=this.dataSource.data;
      if(this.service.user_data!=null){


        console.log(this.dataSource)
        debugger
        console.log(this.service.user_data);
        let itemIndex = this.dataSource.findIndex(item => item.id == this.service.user_data.id);
        this.dataSource[itemIndex].first_name= this.service.user_data.first_name;
        this.dataSource[itemIndex].last_name= this.service.user_data.last_name;
        this.dataSource[itemIndex].email= this.service.user_data.email;
        this.dataSource[itemIndex].avatar= this.service.user_data.avatar;
      }

    });



    //this.service.getList().subscribe(data => {
    //  this.dataSource = data;
    //  console.log(data);

    //});
  }
  findIndexToUpdate(newItem) {
    return newItem.id === this;
}
  deleteClick(data:any){
    debugger
    if (confirm('Are you sure do you want to delete this Game?')) {
      this.dataSource = this.dataSource.filter(({id}) =>id !== data.id);
      this.dataSource=this.dataSource;
      console.log(this.dataSource.data)
    }
  }
  editUser(){

  }
  // editUser(){
  //   const dialog=this.dialog.open(EditUserComponent, {
  //     width: '70%',
  //     height:'70%'
  //   });
  // }
}
