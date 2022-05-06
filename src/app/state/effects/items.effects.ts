import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, EmptyError, map, mergeMap } from "rxjs";
import { ShowCaseService } from "src/app/modules/show-case/services/show-case.service";

import { types } from "../types/types";



@Injectable()
export class ItemsEffects { 





  loadItems$ = createEffect(() => this.actions$.pipe(
    ofType(types.loadingItems),
    mergeMap(() => this._showCaseService.getApi()
      .pipe(
        map(items => ({ type: types.loadedItems, items })),
        catchError(() => EMPTY)
      ))
    )
  );


  constructor(
    private actions$: Actions,
    private _showCaseService: ShowCaseService
    ){}
}
