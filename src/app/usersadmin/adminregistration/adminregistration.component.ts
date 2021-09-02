import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/UserModel';

@Component({
  selector: 'app-adminregistration',
  templateUrl: './adminregistration.component.html',
  styleUrls: ['./adminregistration.component.css']
})
export class AdminregistrationComponent implements OnInit {

  aNewUser: UserModel = new UserModel();

  anAddedUser: UserModel = new UserModel();

  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  addNewAdmin()
  {
    this.aNewUser.stateConnect = false;
    this.aNewUser.profil.idprofil = 2; //3 = Client
    this._httpClient.post('http://localhost:8090/api/user/register',this.aNewUser).subscribe(
      result =>{alert("New user added successfully."); console.log(this.aNewUser);},
      error => {console.log("There some error..."); console.log(error);}
    )
  }

}
