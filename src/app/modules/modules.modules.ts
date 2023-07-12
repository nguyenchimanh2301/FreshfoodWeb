import { ListproductComponent } from './home/listproduct/listproduct.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { CartComponent } from './cart/cart/cart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './home/index/index.component';
import { DetailComponent } from './home/detail/detail.component';

export const MainRoutes: Routes = [
  
    { path: '', component: IndexComponent },
      { path: 'cart', component: CartComponent },
      { path: 'checkout', component:CheckoutComponent },
      { path: 'list_product', component:ListproductComponent },
      { path: 'detail/:id', component:DetailComponent },
    // children: [
    //   { path: 'homes', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
    //   { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)},
    // ]
  
];
@NgModule({
  declarations: [
    DetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MainRoutes),
    
  ]
})


export class ModulesModule { }
