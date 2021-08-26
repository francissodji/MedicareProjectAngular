import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Medecin } from 'src/app/models/Medecin';

@Component({
  selector: 'app-addnewmedecin',
  templateUrl: './addnewmedecin.component.html',
  styleUrls: ['./addnewmedecin.component.css']
})



export class AddnewmedecinComponent implements OnInit {


  newMedecin: Medecin = new Medecin();



  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {

  }

  newUserMedecin()
  {
    this._httpClient.get<Medecin>('http://localhost:8090/medecine/addmedecine').subscribe(
      result =>{this.newMedecin = result; console.log(this.newMedecin);},
      error =>{console.log("There are some error ..."); console.log(error);}
    )
  }

}
