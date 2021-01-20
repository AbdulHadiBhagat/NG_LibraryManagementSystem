import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from './modules/home-component/home-component.component';
import { LoginComponent } from './modules/Common/login/login.component';
import { PersonsComponent } from './modules/Common/persons/persons.component';

// import { NavbarComponent } from 'angular-bootstrap-md';
import { ManageComponent } from './modules/ManageComponent/manage.component';
// import { ShowAllBooksComponent } from './show-all-books/show-all-books.component';
import { PersonHistoryCardComponent } from './modules/Common/person-history-card/person-history-card.component';
import { NavbarComponent } from './modules/Common/navbar/navbar.component';
import { ShowAllBooksComponent } from './modules/show-all-books/show-all-books.component';
import { BrowserModule } from '@angular/platform-browser';
import { PersonTabComponent } from './modules/Common/person-tab/person-tab.component';
// import { LoanGridComponent } from './modules/loan-grid/loan-grid.component';
import { GridComponent } from './modules/grid/grid.component';
import { onholdgridComponent } from './modules/onhold-grid/onhold-grid.component';
import { OnholdsComponent } from './modules/onholds/onholds.component';
import { LoansComponent } from './modules/loans/loans.component';
import { BookComponent } from './modules/Book/book.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  // { path: '', component: PersonsComponent},
  // {path:'history', component:PersonHistoryCardComponent},
  { path: 'home', component: NavbarComponent,
     children:[
      { path: '', component:HomeComponentComponent},
      { path: 'home', component:HomeComponentComponent},
      { path: 'manage', component:ManageComponent},
      { path:'manage/:id',component:PersonTabComponent,
          children:[
                {path:'detail',component:PersonsComponent},
                {path:'onhold',component:onholdgridComponent},
                {path:'loan',component:GridComponent}
                    ]
          },
      {path:'book/:id',component:PersonTabComponent,
          children:[
            {path:'detail',component:BookComponent},
            {path:'onhold',component:onholdgridComponent},
            {path:'loan',component:GridComponent}
                    ]
          },
      {path: 'books' , component:ShowAllBooksComponent},
      {path:'history', component:GridComponent},
      {path: 'holdrequest',component:OnholdsComponent},
      {path: 'laon',component:LoansComponent},
     ]
  },
];


@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents={LoginComponent,NavbarComponent,HomeComponentComponent,
  ManageComponent, ShowAllBooksComponent,PersonHistoryCardComponent}
