import { InjectionToken } from '@angular/core';
import {
  createStore,
  Store
} from 'redux';

import { default as reducer } from './app.reducer';
import { AppStateRedux } from './app.state';

export const AppStore = new InjectionToken('App.store');

export function createAppStore(): Store<AppStateRedux> {
  // return createStore<AppStateRedux, null, null, null>(reducer);
  return createStore(reducer);
}

export const appStoreProviders = [
  { provide: AppStore, useFactory: createAppStore }
];
