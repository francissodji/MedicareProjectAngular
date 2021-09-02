import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/UserModel';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})


export class UserloginComponent implements OnInit {

  aUserName: any;
  aPassword: any;
  userToConnect: UserModel = new UserModel();
  connectedUser: UserModel = new UserModel();

  public connectedUserId: any;

  errorMessage: any;

  constructor(private _httpClient: HttpClient, private _router: Router) { }

  ngOnInit(): void {
  }


  userLogin()
  {

    this._httpClient.post<any>('http://localhost:8090/api/user/login',this.userToConnect).subscribe(
      //result =>{this.connectedUser = result; alert("Correct registration"); console.log(this.connectedUser);},
      result => {console.log("Correct registration"); this.userToConnect = result; 
                  this.connectedUserId = result.iduser; console.log(this.connectedUserId); this._router.navigate(['/listmedecin'])},
      error =>{console.log("An exception has occured."); 
                  /*this.errorMessage = "Bad Credentials. Please enter valid username and password"*/
                  alert("Bad Credentials. Please enter valid username and password.");}
    )
  }
}
