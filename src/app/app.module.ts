import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {HeaderComponent} from './layout/header.component';
import { CreditComponent } from './credit/credit.component';
import { DebitComponent } from './debit/debit.component';
import { environment } from 'src/environments/environment';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { fakeApiService } from './common/fakeApiService.service';
import { Globals } from './common/globals';
import { CheckBalanceComponent } from './checkBalance/checkBalance.component';
import { CheckStatementComponent } from './statement/statement.component';
import { TransactionComponent } from './transaction/transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreditComponent,
    DebitComponent,
    CheckBalanceComponent,
    CheckStatementComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    environment.production ?
    [] : InMemoryWebApiModule.forRoot(fakeApiService)
  ],
  providers: [
    Globals
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
