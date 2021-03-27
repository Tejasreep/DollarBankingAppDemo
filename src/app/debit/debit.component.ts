import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../common/common.service';
import {Globals} from '../common/globals';

@Component({
  selector: 'app-debit',
  templateUrl: './debit.component.html',
  styleUrls: ['./debit.component.css']
})
export class DebitComponent {
  selectedUser="";
  deditForm: FormGroup;
  userListJson = [];

   constructor(private _service:CommonService, private _globals:Globals) {

   }

  ngOnInit() {
    this.deditForm = new FormGroup({
      userName: new FormControl('',Validators.required),
      amount: new FormControl('',Validators.pattern("^[0-9]*$")),
    });
    console.log(this._globals.transaction)
    this.getUserList();
  }

  onSubmit(form: FormGroup) {
    this.debitAmount(form.value.amount,form.value.userName);
    form.reset();
  }

  getUserList() {
     this._service.getUserList().subscribe(user => this.userListJson = user)
  }

  debitAmount(amount,name) {
    let user = this.userListJson.find(x => x.name === name);
    let balance = this._globals.getCurrentBalance(user.id);
    let transaction = {id:user.id, Type:0, amount:parseInt(amount), date:new Date(),balance:balance-parseInt(amount)};
    this._globals.transaction = [...this._globals.transaction,transaction];
  }

  ngOnDestroy() {
  }
  
}
