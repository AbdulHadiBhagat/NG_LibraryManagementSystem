import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';



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
}

