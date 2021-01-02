import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject, InjectionToken } from '@angular/core';
import {NgRedux,NgReduxModule} from '@angular-redux/store';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import * as Redux from 'redux';
import thunk from 'redux-thunk';
import {
  DxSelectBoxModule,
  DxTextAreaModule,
  DxFormModule,
  DxFormComponent,
  DxDataGridComponent,
  DxPopupModule,
  DxButtonModule,
  DxTemplateModule,
  DxCheckBoxModule
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
import { GridComponent } from './modules/grid/grid.component';
import { LoginComponent } from './modules/Common/login/login.component';
import { PersonsComponent } from './modules/Common/persons/persons.component';

import { BookCardsComponent } from './modules/Common/bookCards/book-cards.component';
import { PersonHistoryCardComponent } from './modules/Common/person-history-card/person-history-card.component';
import { BooksPopupComponent } from './modules/books-popup/books-popup.component';
import popup from 'devextreme/ui/popup';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './modules/Common/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppStateRedux } from './store/app.state';
import { AppStore, appStoreProviders } from './store/app.store';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import rootReducer from './store/app.reducer';
import { PersonDetailComponent } from './modules/common/person-detail/person-detail.component';
import { BorrowerDtoComponent } from './Dtos/borrower-dto/borrower-dto.component';
import { LoanDtoComponent } from './modules/Dtos/loan-dto/loan-dto.component';
import { OnHoldDtoComponent } from './modules/Dtos/on-hold-dto/on-hold-dto.component';



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
    PersonsComponent,
    PersonDetailComponent,
    BorrowerDtoComponent,
    LoanDtoComponent,
    OnHoldDtoComponent

  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    DxSelectBoxModule,
    DxTextAreaModule,
    DxFormModule,
    DxPopupModule,
    DxCheckBoxModule,
    DxDataGridModule,
    AppRoutingModule,
    


  ],
  exports: [
    RouterModule
  ],
  providers: [Service,appStoreProviders,], //BookCardsComponent,
  bootstrap: [AppComponent],
  entryComponents: [BooksPopupComponent]

})


export class AppModule {
  constructor(
    ngRedux: NgRedux<any>,
    @Inject(AppStore) public store: Redux.Store<AppStateRedux>
  ){
    ngRedux.configureStore(rootReducer, {}, [thunk], []);
  }
 }
