import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/Category';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

newCateg: Category = new Category();

  constructor(private _httpClient: HttpClient) { }
 
  ngOnInit(): void {

  } 

  addNewCategory()
  {
    this._httpClient.post<any>('http://localhost:8090/api/category/addcategory',this.newCateg).subscribe(
      result =>{alert("Category added successfully.");},
      error =>{console.log("There are some error ..."); console.log(error);}
    )
  }

}
