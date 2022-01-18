import { GetUserSuccess } from './user.actions';
import { Login } from './../Models/Login';
import { User } from './../Models/User';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import  * as userActions from 'src/app/store/user.actions';
import { SharedService } from '../Services/shared-service';
import { mergeMap, map, catchError } from 'rxjs/operators';



@Injectable()
export class UserEffects {


  @Effect()
  loadUsers$: Observable<Action> = this.actions$.pipe(
    ofType(userActions.UserActionTypes.LoadUsers),
    mergeMap(
      action => this.service.getList().pipe(
        map(users => (new userActions.LoadUsersSuccess({ data: users }))),
        catchError(err => of(new userActions.LoadUsersFailure({ error: err })))
      )
    )
  )
  @Effect()
  Login = this.actions$.pipe(
    ofType<userActions.LogIn>(userActions.UserActionTypes.LOGIN),
    mergeMap(data => this.service.login(data).pipe(
      map((users) => new userActions.LogInSuccess({ data: users}
      ))
    ))
  )
  @Effect()
  GetUser = this.actions$.pipe(
    ofType<userActions.GetUser>(userActions.UserActionTypes.Get_User),
    mergeMap(id => this.service.getUserById(id).pipe(
      map((u_data:User) => new userActions.GetUserSuccess({ data: u_data }))
    ))
  )

  constructor(private actions$: Actions, private service: SharedService) { }

}
