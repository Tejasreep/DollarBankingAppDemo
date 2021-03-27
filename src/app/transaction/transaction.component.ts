import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../common/common.service';
import {Globals} from '../common/globals';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {
  toSelectedUser="";
  fromSelectedUser="";
  showMessage = false;
  transactionForm: FormGroup;
  userListJson = [];

   constructor(private _service:CommonService, private _globals:Globals) {

   }

  ngOnInit() {
    this.transactionForm = new FormGroup({
        toUser: new FormControl('',Validators.required),
        fromUser: new FormControl('',Validators.required),
        amount: new FormControl('',Validators.pattern("^[0-9]*$")),
    });
    this.getUserList();
  }

  onSubmit(form: FormGroup) {
      if(form.value.toUser === form.value.fromUser) {
        this.showMessage = true;
      }
      else {
        let fromUserRow = this.userListJson.find(x => x.name === form.value.fromUser);
        let toUserRow = this.userListJson.find(x => x.name === form.value.toUser);
        this.MakeTransaction(form.value.amount, toUserRow, fromUserRow);
      }
      form.reset();
  }

  getUserList() {
     this._service.getUserList().subscribe(user => this.userListJson = user)
  }

  MakeTransaction(amount,toUser,fromUser) {
    let fromUserBalance = this._globals.getCurrentBalance(fromUser.id);
    let toUserBalance = this._globals.getCurrentBalance(toUser.id);
    let debitTransaction = {id:fromUser.id, Type:0, amount:parseInt(amount), date:new Date(),balance:fromUserBalance-parseInt(amount)};
    this._globals.transaction = [...this._globals.transaction,debitTransaction];
    let creditTransaction = {id:toUser.id, Type:1, amount:parseInt(amount), date:new Date(),balance:toUserBalance+parseInt(amount)};
    this._globals.transaction = [...this._globals.transaction,creditTransaction];
  }

  ngOnDestroy() {
  }
  
}
