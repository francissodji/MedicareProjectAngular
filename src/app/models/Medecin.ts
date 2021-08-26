import { Category } from "./Category";

export class Medecin{

    idmedecin: number = 0;
    designMedecin: String = '';
    brand: String = '';
    qttyAvail: number = 0;
    unitPrice: number = 0.0;
    description: String = '';
    stateActivate: boolean = false;
    picture: String = '';
    category: Category = new Category();


    constructor(){}
}
