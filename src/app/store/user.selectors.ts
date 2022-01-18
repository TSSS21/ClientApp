import { User } from './../Models/User';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './user.reducer';


const getUserFeatureState = createFeatureSelector<State<User>>('userState');
export const getUsers = createSelector(
  getUserFeatureState,
  state => state.users
)

export const login = createSelector(
  getUserFeatureState,
  state => state.users
)

export const getUserById = createSelector(
  getUserFeatureState,
  state => state.selected
)

export const getError = createSelector(
  getUserFeatureState,
  state => state.error
)

