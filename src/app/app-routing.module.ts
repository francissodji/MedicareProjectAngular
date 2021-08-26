import { Routes } from "@angular/router";
import { ListmedecineincartComponent } from "./cart/listmedecineincart/listmedecineincart.component";
import { AddnewmedecinComponent } from "./medecines/addnewmedecin/addnewmedecin.component";
import { EditmedecineComponent } from "./medecines/editmedecine/editmedecine.component";
import { ListmedecinComponent } from "./medecines/listmedecin/listmedecin.component";
import { AboutComponent } from "./menus/about/about.component";
import { ContactComponent } from "./menus/contact/contact.component";
import { HomeComponent } from "./menus/home/home.component";
import { PagenotfoundComponent } from "./menus/pagenotfound/pagenotfound.component";
import { UserloginComponent } from "./users/userlogin/userlogin.component";
import { UsersignupComponent } from "./users/usersignup/usersignup.component";


export const MedicareRoute: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'login', component: UserloginComponent },
    { path: 'signup', component: UsersignupComponent },
    { path: 'listmedecin', component: ListmedecinComponent },
    { path: 'addnewmedecin', component: AddnewmedecinComponent },
    { path: 'editmedecine', component: EditmedecineComponent },
    { path: 'medecineincart', component: ListmedecineincartComponent },
    { path: '**', component: PagenotfoundComponent }
]

