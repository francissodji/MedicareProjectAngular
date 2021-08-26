import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})


export class UsersignupComponent implements OnInit {

  newUser:User = new User();

  //newUser:any;

  aUser: User = new User();

  lratos: string = '';

  constructor(private _httpClient: HttpClient, private _router: Router) { }

 

  ngOnInit(): void {
    //this.newUserRegistration();
  }

  newUserRegistration(){

    this._httpClient.get<User>('http://localhost:8090/user/register').subscribe(
      result =>{this.newUser = result; console.log(this.newUser);},
      error =>{console.log("There are some error ..."); console.log(error);}
    )
  
  }
}
