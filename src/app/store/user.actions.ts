import { Login } from '../Models/Login';
import { Action } from '@ngrx/store';

export enum UserActionTypes {
  //Load User Action
  LoadUsers = '[Users] Load Users',
  LoadUsersSuccess = '[Users] Load Users Success',
  LoadUsersFailure = '[Users] Load Users Failure',
  //Login Action
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAILURE = '[Auth] Login Failure',
  //Get User By Id
  Get_User = '[Get] User',
  Get_User_SUCCESS = '[Get] User Success',
  Get_User_FAILURE = '[Get] User Failure',
  // //Edit Action
  // EDIT = '[Update] Edit',
  // EDIT_SUCCESS = '[Update] Edit Success',
  // EDIT_FAILURE = '[Update] Edit Failure',
}

export class LoadUsers implements Action {
  readonly type = UserActionTypes.LoadUsers;
}

export class LoadUsersSuccess implements Action {
  readonly type = UserActionTypes.LoadUsersSuccess;
  constructor(public payload: { data: any }) { }
}

export class LoadUsersFailure implements Action {
  readonly type = UserActionTypes.LoadUsersFailure;
  constructor(public payload: { error: any }) { }
}

export class LogIn implements Action {
  readonly type = UserActionTypes.LOGIN;
  constructor(public payload: Login) {}
}

export class LogInSuccess implements Action {
  readonly type = UserActionTypes.LOGIN_SUCCESS;
  constructor(public payload: { data: any }) {}
}

export class LogInFailure implements Action {
  readonly type = UserActionTypes.LOGIN_FAILURE;
  constructor(public payload: any) {}
}
export class GetUser implements Action {
  readonly type = UserActionTypes.Get_User;
  constructor(public payload: any) {}
}

export class GetUserSuccess implements Action {
  readonly type = UserActionTypes.Get_User_SUCCESS;
  constructor(public payload: { data: any }) {}
}

export class GetUserFailure implements Action {
  readonly type = UserActionTypes.Get_User_FAILURE;
  constructor(public payload: any) {}
}

export type UserActions =
 LoadUsers | LoadUsersSuccess |
 LoadUsersFailure | LogIn | LogInSuccess|
LogInFailure | GetUser| GetUserSuccess |
GetUserFailure;

