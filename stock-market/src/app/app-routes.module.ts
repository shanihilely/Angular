import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStockComponent } from './stock/create-stock/create-stock.component';
import { StockListComponent } from './stock/stock-list/stock-list.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { StockDetailsComponent } from './stock/stock-details/stock-details.component';
import { CreateStockDeactivateGuardGuard } from './guards/create-stock-deactivate-guard.guard';
import { StockLoadResolverService } from './guards/stock-load-resolver.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'stocks/list', component: StockListComponent,
  canActivate: [AuthGuard] },
  { path: 'stocks/create', component: CreateStockComponent,
  canActivate: [AuthGuard],
  canDeactivate: [CreateStockDeactivateGuardGuard] },
  { path: 'stock/:code', component: StockDetailsComponent,
  canActivate: [AuthGuard],
  resolve: { stock: StockLoadResolverService } },
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