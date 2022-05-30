import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'stocks/list', component: ProductListComponent,
        // canActivate: [AuthGuard]
    },
  { path: 'stocks/create', component: CreateProductComponent,
    //   canActivate: [AuthGuard]
    //   ,
    // canDeactivate: [CreateStockDeactivateGuardGuard]
 },
  { path: 'stock/:code', component: ProductDetailsComponent,
//   canActivate: [AuthGuard],
//         resolve: { stock: StockLoadResolverService }
    },
  { path: '**', redirectTo: '/register' }
  ];
  
@NgModule({
imports: [
RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
    ],
    })
    export class AppRoutesModule { }