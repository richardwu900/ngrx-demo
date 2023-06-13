import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountComponent } from './count/count.component';
import { countReducer } from './count/store/count.reducer';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CountEffects } from './count/store/count.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    CountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    EffectsModule.forRoot([CountEffects]),
    // similar to router forRoot forChild, forRoot forFeature here
    StoreModule.forRoot({stateIdentifier: countReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
