import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  AccountComponent,
  BudgetEditComponent,
  BudgetOverviewComponent,
  HomeComponent,
} from './components';
import { AuthGuard } from './guards';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'overview',
    component: BudgetOverviewComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit',
    component: BudgetEditComponent,
    canActivate: [AuthGuard],
  },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
