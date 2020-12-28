import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {


  
  FirstName = new FormControl('');
  LastName= new FormControl('');
  EmailId = new FormControl('');
  Password = new FormControl('');


  constructor (private router: Router){}


  public onLoginClick(){
    this.router.navigate(['./home']);
  }
}
