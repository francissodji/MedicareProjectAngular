import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/UserModel';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})


export class UserregistrationComponent implements OnInit {

  aNewUser: UserModel = new UserModel();

  anAddedUser: UserModel = new UserModel();


  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  addNewUser()
  {
    this.aNewUser.stateConnect = false;
    this.aNewUser.profil.idprofil = 3; //3 = Client
    this._httpClient.post('http://localhost:8090/api/user/register',this.aNewUser).subscribe(
      result =>{alert("New user added successfully."); console.log(this.aNewUser);},
      error => {console.log("There some error..."); console.log(error);}
    )
  }

  /*
  getAllUser()
  {
    this._httpClient.get('http://localhost:8090/user/allmedecine').subscribe(
      result =>{this.allMedecinList = result; console.log(this.allMedecinList);},
      error =>{console.log("There are some error ..."); console.log(error);}
    )
  }
  */

}
