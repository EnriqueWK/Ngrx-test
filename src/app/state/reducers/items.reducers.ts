import { state } from '@angular/animations';
import { createReducer, INIT, on } from '@ngrx/store';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ItemModel } from 'src/app/core/models/item.interface';
import { ItemState } from 'src/app/core/models/item.state';
import { LoadedItems, loadingItems } from '../actions/items.actions';

export const INITIAL_STATE: ItemState = { loading: false, items: [] };

export const itemsReducer = createReducer(
  INITIAL_STATE,
  on(loadingItems, (state) => { return {...state, loading: true}}),
  on(LoadedItems, (state, {items}) => { return {
    ...state,
    loading: false,
    items
  }}),
);
