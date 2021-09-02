import { Profil } from "./Profil";

export class UserModel{
    iduser: number = 0;
	firstName: string = '';
	lastName: string = '';
	passWord: string = '';
	stateConnect: boolean = false;
    userName: string = '';
	profil: Profil = new Profil();
}