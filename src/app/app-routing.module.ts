import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckBalanceComponent } from './checkBalance/checkBalance.component';
import { CreditComponent } from './credit/credit.component';
import { DebitComponent } from './debit/debit.component';
import { CheckStatementComponent } from './statement/statement.component';
import { TransactionComponent } from './transaction/transaction.component';


const routes: Routes = [
  { path: '', redirectTo: 'credit', pathMatch:'full'},
  { path: 'credit', component: CreditComponent},
  { path: 'debit', component: DebitComponent},
  { path: 'checkBalance', component: CheckBalanceComponent},
  { path: 'checkStatement', component: CheckStatementComponent},
  { path: 'transaction', component: TransactionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
