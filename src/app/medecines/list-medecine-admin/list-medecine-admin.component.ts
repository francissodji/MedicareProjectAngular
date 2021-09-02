import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-medecine-admin',
  templateUrl: './list-medecine-admin.component.html',
  styleUrls: ['./list-medecine-admin.component.css']
})
export class ListMedecineAdminComponent implements OnInit {

  allMedecinList: any;

  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getAllMedecin();
  }

  getAllMedecin()
  {
    this._httpClient.get('http://localhost:8090/api/medecine/allmedecine').subscribe(
      result =>{this.allMedecinList = result; console.log(this.allMedecinList);},
      error =>{console.log("There are some error ..."); console.log(error);}
    )
  }
}
