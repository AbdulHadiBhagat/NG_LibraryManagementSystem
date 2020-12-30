import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from './modules/home-component/home-component.component';
import { LoginComponent } from './modules/Common/login/login.component';
// import { NavbarComponent } from 'angular-bootstrap-md';
import { ManageComponent } from './modules/ManageComponent/manage.component';
import { ShowAllBooksComponent } from './show-all-books/show-all-books.component';
import { PersonHistoryCardComponent } from './modules/Common/person-history-card/person-history-card.component';
import { NavbarComponent } from './modules/Common/navbar/navbar.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: NavbarComponent,
     children:[
      { path: '', component:HomeComponentComponent},
      { path: 'manage', component:ManageComponent},
      {path: 'books' , component:ShowAllBooksComponent},
      {path:'history', component:PersonHistoryCardComponent}

     ]},


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
