import { CartMedecine } from "./CartMedecine";
import { Category } from "./Category";

export class Medecin{

    idmedecin: number = 0;
    designmedecin: string = '';
    brand: string = '';
    qttyavail: number = 0;
    unitprice: number = 0.0;
    description: string = '';
    stateactivate: boolean = false;
    picture: string = '';
    category: Category = new Category();
    //cartformedecin: CartMedecine = new CartMedecine();


    constructor(){}
}
