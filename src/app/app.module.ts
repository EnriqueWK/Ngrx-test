import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ShowCaseModule } from './modules/show-case/show-case.module';
import { HeaderComponent } from './shared/header/header.component';
import { itemsReducer } from './state/reducers/items.reducers';
import { ROOT_REDUCERS } from './state/app.state';
import { EffectsModule } from '@ngrx/effects';
import { ItemsEffects } from './state/effects/items.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShowCaseModule,
    StoreModule.forRoot(ROOT_REDUCERS), //REDUX STORE
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([ItemsEffects]) //REDUX EFFECTS MODULE
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
