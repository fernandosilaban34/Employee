import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  admin = {
    username: 'admin',
    password: 'admin'
   };

   public user = '';
   public pass = '';

  constructor( private router: Router) { }

  ngOnInit() {
  }

  login() {

    if ( this.user === this.admin.username && this.pass === this.admin.password) {
      this.router.navigate(['/home']);

    } else {
      alert('Login Error');
    }
    console.log(this.user, this.pass);
  }

}
