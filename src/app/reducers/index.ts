import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { User } from '../Models/User';
import * as fromUser from '../store/user.reducer';


export interface State {

  [fromUser.userFeatureKey]: fromUser.State<User>;
  // [fromUser.userFeatureKey]: fromUser.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromUser.userFeatureKey]: fromUser.reducer,
  // [fromUser.userFeatureKey]: fromUser.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
