import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})


export class UserloginComponent implements OnInit {

  form: FormGroup;
  msg: any;

  aUserName: any;
  aPassword: any;

  //userinfo: User = new User();
  //connectedUser: User = new User()


  constructor(private _httpClient: HttpClient, private _router: Router, private _formBuilder: FormBuilder) {
    this.form = this._formBuilder.group({
      //userName: new FormControl('',[Validators.required])
      //passWord: new FormControl('',[Validators.required])

    })
   }



  

  ngOnInit(): void {

  }


  loginUser(): void {
    /*
    this.aUserName = this.userinfo.userName;
    this.aPassword = this.userinfo.passWord;

    this._httpClient.post('http://localhost:8090/user/userlogin/', this.userinfo.userName ).subscribe(
      result =>{console.log("Correct login.")},
      error => {console.log("Wrong credential");}
    );
    */
  }
  

}
