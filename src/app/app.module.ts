import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
 


import { DxSelectBoxModule,
  DxTextAreaModule,
  DxFormModule,
  DxFormComponent, 
  DxDataGridComponent} from 'devextreme-angular';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
//import { BookCardsComponent } from './modules/Common/book-cards.component';
import { HomeComponentComponent } from './home-component/home-component.component';
//import { PersonHistoryCardComponent } from './modules/Common/person-history-card/person-history-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BorrowerComponent } from './modules/Borrower/borrower.component';
import { ClerkComponent } from './modules/Clerk/clerk.component';
import { BookComponent } from './modules/Book/book.component';
import { LibrarianComponent } from './modules/Librarian/librarian.component';
import { PersonComponent } from './modules/Person/person.component';

import { CarasolComponentComponent } from './carasol-component/carasol-component.component';



import { ManageComponent } from './ManageComponent/manage.component';

import { LoginComponent } from './common/login/login.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { PersonsComponent } from './common/persons/persons.component';
import { GridComponent } from './grid/grid.component';
import { Service } from './modules/Loan/loan';
import { DxDataGridModule } from 'devextreme-angular';
import { ShowAllBooksComponent } from './show-all-books/show-all-books.component';



@NgModule({
  declarations: [
    AppComponent,
    //BookCardsComponent,
    HomeComponentComponent,
    //PersonHistoryCardComponent,
    BorrowerComponent,
    ClerkComponent,
    BookComponent,
    PersonComponent,
    LibrarianComponent,
    CarasolComponentComponent,
    ManageComponent,
    LoginComponent,
    NavbarComponent,
    PersonsComponent,
    GridComponent,
    ShowAllBooksComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    DxSelectBoxModule,
    DxTextAreaModule,
    DxFormModule,   
    DxDataGridModule
  ],
  providers: [Service], //BookCardsComponent,
   bootstrap: [AppComponent,LoginComponent],
})
export class AppModule { }
