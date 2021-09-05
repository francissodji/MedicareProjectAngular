import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Medecin } from 'src/app/models/Medecin';

@Component({
  selector: 'app-modifymedecineadmin',
  templateUrl: './modifymedecineadmin.component.html',
  styleUrls: ['./modifymedecineadmin.component.css']
})
export class ModifymedecineadminComponent implements OnInit {

  modifyMedecine: Medecin = new Medecin();

  theselectedIdMed: any;
  resultMedecin: any;

  constructor(private _activatedroute: ActivatedRoute, private _httpClient: HttpClient) { }

  ngOnInit(): void {

    this.editmedecine();

  }

  editmedecine(){
    this.theselectedIdMed = this._activatedroute.snapshot.paramMap.get("idmedecin");

    console.log(this.theselectedIdMed);
    this._httpClient.get('http://localhost:8090/api/medecine/amedecine/'+ this.theselectedIdMed).subscribe(
      result =>{this.resultMedecin = result; console.log(this.resultMedecin);},
      error =>{console.log("There are some error"); console.log(error) }
    )
  }

  modifytheMedecine(){
    
  }
}
