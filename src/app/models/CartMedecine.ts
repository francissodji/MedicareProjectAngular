import { Cart } from "./Cart";
import { Medecin } from "./Medecin";

export class CartMedecine
{
    idCart: number = 0;
    qttyBuy: number = 0
    dateCartMed: Date = new Date();
    stageItem: String = '';
    cart: Cart = new Cart();
    medecine: Medecin = new Medecin();

}
