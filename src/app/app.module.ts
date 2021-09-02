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
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { CheckoutsuccessComponent } from './cart/checkoutsuccess/checkoutsuccess.component';
import { CheckoutdenialComponent } from './cart/checkoutdenial/checkoutdenial.component';
import { AddcategoryComponent } from './categories/addcategory/addcategory.component';
import { UserregistrationComponent } from './users/userregistration/userregistration.component';
import { UserloginComponent } from './users/userlogin/userlogin.component';
import { ListMedecineAdminComponent } from './medecines/list-medecine-admin/list-medecine-admin.component';
import { ModifymedecineadminComponent } from './medecines/modifymedecineadmin/modifymedecineadmin.component';
import { DeletemedecineadminComponent } from './medecines/deletemedecineadmin/deletemedecineadmin.component';
import { AdminloginComponent } from './usersadmin/adminlogin/adminlogin.component';
import { AdminregistrationComponent } from './usersadmin/adminregistration/adminregistration.component';
import { EditmedecineadminComponent } from './medecines/editmedecineadmin/editmedecineadmin.component';
import { ActivdeactivmedecineadminComponent } from './medecines/activdeactivmedecineadmin/activdeactivmedecineadmin.component';


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
    PagenotfoundComponent,
    CheckoutComponent,
    CheckoutsuccessComponent,
    CheckoutdenialComponent,
    AddcategoryComponent,
    UserregistrationComponent,
    UserloginComponent,
    ListMedecineAdminComponent,
    ModifymedecineadminComponent,
    DeletemedecineadminComponent,
    AdminloginComponent,
    AdminregistrationComponent,
    EditmedecineadminComponent,
    ActivdeactivmedecineadminComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(MedicareRoute),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [GeneralmenuComponent]
})
export class AppModule { }
