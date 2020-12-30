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
  DxDataGridComponent,
  DxPopupModule, 
  DxButtonModule, 
  DxTemplateModule} from 'devextreme-angular';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HomeComponentComponent } from './modules/home-component/home-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BorrowerComponent } from './modules/Borrower/borrower.component';
import { ClerkComponent } from './modules/Clerk/clerk.component';
import { BookComponent } from './modules/Book/book.component';
import { LibrarianComponent } from './modules/Librarian/librarian.component';
import { PersonComponent } from './modules/Person/person.component';

import { CarasolComponentComponent } from './modules/carasol-component/carasol-component.component';

import { ManageComponent } from './modules/ManageComponent/manage.component';

import { LoginComponent } from './modules/Common/login/login.component';
import { Service } from './modules/Loan/loan';
import { DxDataGridModule } from 'devextreme-angular';
import { ShowAllBooksComponent } from './show-all-books/show-all-books.component';
import { PaginationComponent } from './modules/pagination/pagination.component';
import { Route } from '@angular/router';
import { TabComponent } from './common/tab/tab.component';
import { GridComponent } from './modules/grid/grid.component';
import { BookCardsComponent } from './modules/common/bookCards/book-cards.component';
import { PersonHistoryCardComponent } from './modules/common/person-history-card/person-history-card.component';
import { NavbarComponent } from './common/navbar/navbar.component';



const ROUTES: Route[] = [
  { path: '', component: LoginComponent},
  { path: 'home', component: HomeComponentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
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
    LoginComponent,
    NavbarComponent,
    GridComponent,
    ShowAllBooksComponent,
    TabComponent,
    PaginationComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    DxSelectBoxModule,
    DxTextAreaModule,
    DxFormModule,   
    DxDataGridModule,
  
    
  ],
  providers: [Service], //BookCardsComponent,
   bootstrap: [AppComponent,LoginComponent],
})


export class AppModule { }
