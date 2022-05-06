import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { SelectItemList } from 'src/app/state/selectors/item.selector';
import { ShowCaseService } from '../services/show-case.service';

@Component({
  selector: 'app-ui-block-item',
  templateUrl: './ui-block-item.component.html',
  styleUrls: ['./ui-block-item.component.scss']
})
export class UiBlockItemComponent implements OnInit {
  items$: Observable<any> = new Observable();

  constructor(private _store: Store<AppState>) { }

  ngOnInit(): void {
    this.items$ = this._store.select(SelectItemList);
  }

}
