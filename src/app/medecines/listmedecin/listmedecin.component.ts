import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Medecin } from 'src/app/models/Medecin';

@Component({
  selector: 'app-listmedecin',
  templateUrl: './listmedecin.component.html',
  styleUrls: ['./listmedecin.component.css']
})

export class ListmedecinComponent implements OnInit {

  //allMedecinList: Medecin = new Medecin();
  searchElement: any;
  allMedecinList: any;
  urlimage: string = '';
   
  //pictureDirectoryPath:any = 'D:\PROJECTS\PROJECTANGULAR\Medicare\src\app\images';

  constructor(private _httpClient: HttpClient) { }


  ngOnInit(): void {

    this.urlimage = './assets/image/';

    this.getAllMedecin();

  }


  getAllMedecin()
  {
    this._httpClient.get<Medecin>('http://localhost:8090/api/medecine/allmedecine').subscribe(
      result =>{this.allMedecinList = result; console.log(this.allMedecinList);},
      error =>{console.log("There are some error ..."); console.log(error);}
    )
  }

  serachMedecin()
  {
    this._httpClient.get<Medecin>('http://localhost:8090/api/medecine/allmedecineseach'+this.searchElement).subscribe(
      result =>{this.allMedecinList = result; console.log(this.allMedecinList);},
      error =>{console.log("There are some error ..."); console.log(error);}
    )
  }

}
