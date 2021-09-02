import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/Category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

//topThreeCateg: Category = new Category();
urlimage: string = '';
urlprincipalIm: string = '';
topThreeCateg:any;
topThreeMedecine:any;

  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {

    this.urlimage = './assets/image/medicare.jpg';
    //this.urlprincipalIm = this.urlimage
    this.getTopThreeCategory();
    this.getTopThreeProduct();
  }


  getTopThreeCategory(){
    this._httpClient.get('http://localhost:8090/api/category/topthreecategory').subscribe(
      result =>{this.topThreeCateg = result; console.log(this.topThreeCateg)},
      error =>{console.log("There are some error ..."); console.log(error);}
    )
  }

  getTopThreeProduct(){
    this._httpClient.get('http://localhost:8090/api/medecine/topthreemedecine').subscribe(
      result =>{this.topThreeMedecine = result; console.log(this.topThreeCateg)},
      error =>{console.log("There are some error ..."); console.log(error);}
    )
  }
}
