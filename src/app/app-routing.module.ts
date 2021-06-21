import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Components/cart/cart.component';
import { DetailProductComponent } from './Components/detail-product/detail-product.component';
import { ListProductComponent } from './Components/list-product/list-product.component';

const routes: Routes = [
  {
    path: '',
    component: ListProductComponent,
  },
  {
    path: 'detail/:id',
    component: DetailProductComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
