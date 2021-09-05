import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Medecin } from 'src/app/models/Medecin';

@Component({
  selector: 'app-searchmedecine',
  templateUrl: './searchmedecine.component.html',
  styleUrls: ['./searchmedecine.component.css']
})
export class SearchmedecineComponent implements OnInit {


  allMedecinList: Medecin = new Medecin();
  theReasearchElement: any;

  filterTerm: string = '';

  constructor(private _httpClient: HttpClient, private _activatedroute: ActivatedRoute) { }

  ngOnInit(): void {

    this.getAllSearchMedecin();
  
  }


  getAllSearchMedecin()
  {
    this.theReasearchElement = this._activatedroute.snapshot.paramMap.get("searchelement");

    this._httpClient.get<Medecin>('http://localhost:8090/api/medecine/allmedecine'+this.filterTerm).subscribe(
      result =>{this.allMedecinList = result; console.log(this.allMedecinList);},
      error =>{console.log("There are some error ..."); console.log(error);}
    )
  }

}
