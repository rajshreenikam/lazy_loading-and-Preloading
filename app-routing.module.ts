import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { prefixed } from 'eventemitter3';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CustomerslistComponent } from './customers/customerslist/customerslist.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrderlistComponent } from './order/orderlist/orderlist.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { ProductsComponent } from './products/products.component';
import { TvComponent } from './products/tv/tv.component';
import { WashingmachineComponent } from './products/washingmachine/washingmachine.component';


const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch: 'full'},
  {path:'login', component: LoginComponent },
  {path :'home', component: HomeComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path:'contactus', component: ContactusComponent},
  {path: 'products', loadChildren: './products/products.module#ProductsModule'},
  {path: 'order', loadChildren: './order/order.module#OrderModule'},
  {path: 'customers', loadChildren: './customers/customers.module#CustomersModule' },
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
