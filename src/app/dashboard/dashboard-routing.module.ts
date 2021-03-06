import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from './login/login.component';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: './people/people.module#PeopleModule'
      },
      {
        path: 'items',
        loadChildren: './items/items.module#ItemsModule'      
      },
      {
        path:'allitems',
        loadChildren : './allitems/allitems.module#AllItemsModule'
      },
      {
        path : 'login' , loadChildren : './login/login.module#LoginModule'
      },
      {
        path : 'register' , loadChildren : './register/register.module#RegisterModule'
      },
      {
        path : 'shopping-cart' , loadChildren : './cart/cart.module#CartModule'
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DashboardRoutingModule {}
