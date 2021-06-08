import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RatingBarComponent } from './rating-bar/rating-bar.component';
import { RatingPointComponent } from './rating-point/rating-point.component';
import { CountDownComponent } from './count-down/count-down.component';
import {FormsModule} from '@angular/forms';
import { StartTimeComponent } from './start-time/start-time.component';

@NgModule({
  declarations: [
    AppComponent,
    RatingBarComponent,
    RatingPointComponent,
    CountDownComponent,
    StartTimeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
