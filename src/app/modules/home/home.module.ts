import { ListproductComponent } from './listproduct/listproduct.component';
import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { SharedComponent } from 'src/app/shared/shared.component';
import { RouterModule, Routes } from '@angular/router';

// export const MainRoutes: Routes = [
//   {
//     path: '', component: IndexComponent,
//     children: [
//       { path: '/list_product', component: ListproductComponent },
//       // { path: 'homes', loadChildren: () => import('./homes/homes.module').then(m => m.HomesModule)},
//       // { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)},
//     ]
//   }
// ];


@NgModule({
  declarations: [
    SharedComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class HomeModule { }
