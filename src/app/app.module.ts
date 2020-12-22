import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';


import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { BookCardsComponent } from './modules/Common/book-cards.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { PersonHistoryCardComponent } from './modules/Common/person-history-card/person-history-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BookCardsComponent,
    HomeComponentComponent,
    PersonHistoryCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent,BookCardsComponent]
})
export class AppModule { }
