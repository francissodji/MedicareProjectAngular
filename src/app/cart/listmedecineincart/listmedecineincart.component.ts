import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartMedecine } from 'src/app/models/CartMedecine';
import { Medecin } from 'src/app/models/Medecin';


@Component({
  selector: 'app-listmedecineincart',
  templateUrl: './listmedecineincart.component.html',
  styleUrls: ['./listmedecineincart.component.css']
})
export class ListmedecineincartComponent implements OnInit {

  //aMedecine: Medecin = new Medecin();
  //allMedecineInCart: CartMedecine = new CartMedecine();

  allMedecineInCart: any;
  aMedecine: any;

  aIdConnectedUser: Number = 7;

  constructor(private _httpClient: HttpClient, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.medecineInCartForAUser()
  }


  medecineInCartForAUser(){
    //this.aIdConnectedUser = this._activatedRoute.snapshot.paramMap.get("idmedecin");


    this._httpClient.get('http://localhost:8090/medecinincart/unsolditems/'+this.aIdConnectedUser).subscribe(
      result =>{this.allMedecineInCart = result; console.log(this.allMedecineInCart);},
      error =>{console.log("There are some error ..."); console.log(error);}
    )

  }

}
