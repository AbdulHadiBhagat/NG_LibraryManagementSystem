import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import {
  DxSelectBoxModule,
  DxTextAreaModule,
  DxFormModule,
  DxFormComponent,
  DxDataGridComponent,
  DxPopupModule,
  DxButtonModule,
  DxTemplateModule
} from 'devextreme-angular';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HomeComponentComponent } from './modules/home-component/home-component.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BorrowerComponent } from './modules/Borrower/borrower.component';
import { ClerkComponent } from './modules/Clerk/clerk.component';
import { BookComponent } from './modules/Book/book.component';
import { LibrarianComponent } from './modules/Librarian/librarian.component';
import { PersonComponent } from './modules/Person/person.component';

import { CarasolComponentComponent } from './modules/carasol-component/carasol-component.component';

import { ManageComponent } from './modules/ManageComponent/manage.component';

// import { LoginComponent } from './modules/Common/login/login.component';
import { Service } from './modules/Loan/loan';
import { DxDataGridModule } from 'devextreme-angular';
import { ShowAllBooksComponent } from './modules/show-all-books/show-all-books.component';
import { Route, Router, RouterModule, Routes } from '@angular/router';

import { PaginationComponent } from './modules/pagination/pagination.component';
import { TabComponent } from './common/tab/tab.component';
import { GridComponent } from './modules/grid/grid.component';
import { LoginComponent } from './modules/Common/login/login.component';
import { BookCardsComponent } from './modules/Common/bookCards/book-cards.component';
import { PersonHistoryCardComponent } from './modules/Common/person-history-card/person-history-card.component';
import { BooksPopupComponent } from './modules/books-popup/books-popup.component';
import popup from 'devextreme/ui/popup';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './modules/Common/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    BookCardsComponent,
    HomeComponentComponent,
    PersonHistoryCardComponent,
    BorrowerComponent,
    ClerkComponent,
    BookComponent,
    PersonComponent,
    LibrarianComponent,
    CarasolComponentComponent,
    ManageComponent,
    GridComponent,
    ShowAllBooksComponent,
    PaginationComponent,
    BooksPopupComponent,
    TabComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    DxSelectBoxModule,
    DxTextAreaModule,
    DxFormModule,
    DxPopupModule,
    DxDataGridModule,
    AppRoutingModule,


  ],
  exports: [
    RouterModule
  ],
  providers: [Service], //BookCardsComponent,
  bootstrap: [AppComponent],
  entryComponents: [BooksPopupComponent]

})


export class AppModule { }
