import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MedicareRoute } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './menus/home/home.component';
import { PagenotfoundComponent } from './menus/pagenotfound/pagenotfound.component';
import { AddnewmedecinComponent } from './medecines/addnewmedecin/addnewmedecin.component';
import { ListmedecinComponent } from './medecines/listmedecin/listmedecin.component';
import { GeneralmenuComponent } from './menus/generalmenu/generalmenu.component';
import { EditmedecineComponent } from './medecines/editmedecine/editmedecine.component';
import { ListmedecineincartComponent } from './cart/listmedecineincart/listmedecineincart.component';
import { ContactComponent } from './menus/contact/contact.component';
import { AboutComponent } from './menus/about/about.component';


@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    AboutComponent,
    AddnewmedecinComponent,
    ListmedecinComponent,
    GeneralmenuComponent,
    EditmedecineComponent,
    ListmedecineincartComponent,
    PagenotfoundComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(MedicareRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [GeneralmenuComponent]
})
export class AppModule { }
