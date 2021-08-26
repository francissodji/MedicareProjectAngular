import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Medecin } from 'src/app/models/Medecin';

@Component({
  selector: 'app-editmedecine',
  templateUrl: './editmedecine.component.html',
  styleUrls: ['./editmedecine.component.css']
})
export class EditmedecineComponent implements OnInit {

  theselectedIdMed: any;
  resultMedecin:Medecin = new Medecin();

  constructor(private _activatedroute: ActivatedRoute, private _httpClient: HttpClient) { }

  ngOnInit(): void {

    this.editmedecine();
  }

  editmedecine(){
    this.theselectedIdMed = this._activatedroute.snapshot.paramMap.get("idmedecin");

    console.log(this.theselectedIdMed);
    this._httpClient.get<Medecin>('http://localhost:8090/medecine/amedecine/'+ this.theselectedIdMed).subscribe(
      result =>{this.resultMedecin = result; console.log(this.resultMedecin);},
      error =>{console.log("There are some error"); console.log(error) }
    )
  }

}
