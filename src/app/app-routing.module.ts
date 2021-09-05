import { Routes } from "@angular/router";
import { CheckoutComponent } from "./cart/checkout/checkout.component";
import { CheckoutdenialComponent } from "./cart/checkoutdenial/checkoutdenial.component";
import { CheckoutsuccessComponent } from "./cart/checkoutsuccess/checkoutsuccess.component";
import { ListmedecineincartComponent } from "./cart/listmedecineincart/listmedecineincart.component";
import { AddcategoryComponent } from "./categories/addcategory/addcategory.component";
import { AddnewmedecinComponent } from "./medecines/addnewmedecin/addnewmedecin.component";
import { EditmedecineComponent } from "./medecines/editmedecine/editmedecine.component";
import { ListmedecinComponent } from "./medecines/listmedecin/listmedecin.component";
import { AboutComponent } from "./menus/about/about.component";
import { ContactComponent } from "./menus/contact/contact.component";
import { HomeComponent } from "./menus/home/home.component";
import { UserregistrationComponent } from "./users/userregistration/userregistration.component"; 
import { PagenotfoundComponent } from "./menus/pagenotfound/pagenotfound.component";
import { UserloginComponent } from "./users/userlogin/userlogin.component";
import { ListMedecineAdminComponent } from "./medecines/list-medecine-admin/list-medecine-admin.component";
import { ModifymedecineadminComponent } from "./medecines/modifymedecineadmin/modifymedecineadmin.component";
import { DeletemedecineadminComponent } from "./medecines/deletemedecineadmin/deletemedecineadmin.component";
import { AdminregistrationComponent } from "./usersadmin/adminregistration/adminregistration.component";
import { AdminloginComponent } from "./usersadmin/adminlogin/adminlogin.component";
import { EditadminmedecineComponent } from "./medecines/editadminmedecine/editadminmedecine.component";



export const MedicareRoute: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },

    
    { path: 'listmedecinadmin', component: ListMedecineAdminComponent },
    { path: 'editadminmedecine/:idmedecin', component: EditadminmedecineComponent},
    { path: 'modifymedecineadmin/:idmedecin', component: ModifymedecineadminComponent },
    { path: 'deletemedecineadmin/:idmedecin', component: DeletemedecineadminComponent },
    //{ path: 'activdeactivmedecineadmin/:idmedecin', component: EditmedecineadminComponent },

    { path: 'addnewmedecin', component: AddnewmedecinComponent },
    { path: 'listmedecin', component: ListmedecinComponent },
    { path: 'editmedecine/:idmedecin', component: EditmedecineComponent },
    { path: 'medecineincart', component: ListmedecineincartComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'checkoutsuccess', component: CheckoutsuccessComponent },
    { path: 'checkoutdenial', component: CheckoutdenialComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'addnewcategory', component: AddcategoryComponent },
    { path: 'userregistration', component: UserregistrationComponent},
    { path: 'userlogin', component: UserloginComponent},
    { path: 'adminregistration', component: AdminregistrationComponent},
    { path: 'adminlogin', component: AdminloginComponent},
    
    { path: '**', component: PagenotfoundComponent }
]