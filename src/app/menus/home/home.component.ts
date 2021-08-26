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

topThreeCateg:any;

  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getTopThreeCategory();
  }


  getTopThreeCategory(){
    this._httpClient.get('http://localhost:8090/category/topthreecategory').subscribe(
      result =>{this.topThreeCateg = result; console.log(this.topThreeCateg)},
      error =>{console.log("There are some error ..."); console.log(error);}
    )
  }
}
