import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { Medecin } from 'src/app/models/Medecin';

@Component({
  selector: 'app-addnewmedecin',
  templateUrl: './addnewmedecin.component.html',
  styleUrls: ['./addnewmedecin.component.css']
})



export class AddnewmedecinComponent implements OnInit {


  newMedecine: Medecin = new Medecin();
  //categoryList: Category = new Category();

  categoryList: any;

  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {

    this.getAllCategories()
  }

  getAllCategories()
  {
    this._httpClient.get<Category>('http://localhost:8090/category/allcategories').subscribe(
      result =>{this.categoryList = result; console.log(this.categoryList);},
      error =>{console.log("There are some error ..."); console.log(error);}
    )
  }

  newUserMedecine()
  {
    this.newMedecine.stateactivate = true; // all medecine are active once the are created
    this._httpClient.post('http://localhost:8090/api/medecine/addmedecine', this.newMedecine).subscribe(
      result =>{alert("Medecine successfully added.")},
      error =>{console.log("There are some error ..."); console.log(error);}
    )
  }

}
