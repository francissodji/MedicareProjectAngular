
import { Profil } from "./Profil";

export class User {
    
    iduser: number = 0;
	firstnames: string = "";
	lastname: string = '';
	username: string = '';
	password: string = '';
	stateconnect: boolean = false;
	idprofil: Profil = new Profil();
	
    constructor(){}

}

