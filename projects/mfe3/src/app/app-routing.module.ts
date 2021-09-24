import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => 
      import("./payment/payment.module").then((m) => m.PaymentModule),
      pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
