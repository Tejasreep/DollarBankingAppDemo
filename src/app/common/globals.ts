import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  transaction = [];

  getCurrentBalance(id:string) {
    let credit_amount = 0;
    let dedit_amount = 0;
    let credit = this.transaction.filter(x => (x.Type === 1 && x.id === id));
    let debit = this.transaction.filter(x => (x.Type === 0 && x.id === id));
    if(credit.length>0){
      credit_amount = credit.map(a => a.amount).reduce((a, b) => a + b );
    }
    if(debit.length>0){
      dedit_amount = debit.map(a => a.amount).reduce((a, b) => a + b );
    }
    return credit_amount - dedit_amount;
  }
}