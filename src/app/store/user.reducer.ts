import { Action } from '@ngrx/store';
import { User } from '../Models/User';
import { UserActions, UserActionTypes, LogIn, GetUserFailure } from './user.actions';


export const userFeatureKey = 'userState';

export interface State<User> {
  users: User[],
  error: string,
  selected:any,


}

export const initialState: State<User> = {
  users: [],
  error: '',
  selected:''

};

export function reducer(state = initialState, action: UserActions): State<User> {
  debugger
  switch (action.type) {
    case UserActionTypes.LoadUsers:
      return {
        ...state
      }
    case UserActionTypes.LoadUsersSuccess:
      return {
        ...state,
        users: action.payload.data,
        error: ''

      }
    case UserActionTypes.LoadUsersFailure:
      return {
        ...state,
        users: [],
        error: action.payload.error
      }
    case UserActionTypes.LOGIN:
      return {
        ...state
      }
    case UserActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        users: action.payload.data,
        error: ''

      }
    case UserActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        users: [],
        error: action.payload.error
      }
    case UserActionTypes.Get_User:
        return {
          ...state
        }
    case UserActionTypes.Get_User_SUCCESS:
        return {
          ...state,
          selected: action.payload.data,
          error: ''

        }
    case UserActionTypes.Get_User_FAILURE:
        return {
          ...state,
          users: [],
          error: action.payload.error
        }

    default:
      return state;

  }
}
