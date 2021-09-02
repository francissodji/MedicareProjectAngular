import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/UserModel';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  aUserName: any;
  aPassword: any;
  connectedUser: UserModel = new UserModel();

  errorMessage: any;

  constructor(private _httpClient: HttpClient, private _router: Router) { }

  ngOnInit(): void {
  }

  userLogin()
  {

    this._httpClient.post<any>('http://localhost:8090/api/user/login',this.connectedUser).subscribe(
      //result =>{this.connectedUser = result; alert("Correct registration"); console.log(this.connectedUser);},
      result => {console.log("Correct registration"); 
                  this._router.navigate(['/listmedecinadmin'])},
      error =>{console.log("An exception has occured."); 
                  /*this.errorMessage = "Bad Credentials. Please enter valid username and password"*/
                  alert("Bad Credentials. Please enter valid username and password.");}
    )
  }

}
