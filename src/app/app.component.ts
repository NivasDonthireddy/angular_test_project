import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './auth-form/auth-form.interface';
import { Post } from './Post';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    
})
export class AppComponent implements OnInit{
    constructor(){}

    ngOnInit(): void {

    }

    rememberMe: boolean = false;

    rememberUser(remember: boolean) {
      this.rememberMe = remember;
    }
  
    createUser(user : any) {
      console.log('Create account', user);
    }
  
    loginUser(user: any) {
      console.log('Login', user, this.rememberMe);
    }
}
