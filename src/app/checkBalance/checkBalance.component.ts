import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../common/common.service';
import {Globals} from '../common/globals';

@Component({
  selector: 'app-check-balance',
  templateUrl: './checkBalance.component.html'
})
export class CheckBalanceComponent {
    selectedUser="";
    balance=null;
    checkBalanceForm: FormGroup;
    userListJson = [];
  
     constructor(private _service:CommonService,private _globals:Globals) {
  
     }
  
    ngOnInit() {
      this.checkBalanceForm = new FormGroup({
        userName: new FormControl('',Validators.required)
      });
  
      this.getUserList();
    }
  
    onSubmit(form: FormGroup) {
      this.balance = null
      this.checkBalance(form.value.userName);
      form.reset();
    }
  
    getUserList() {
       this._service.getUserList().subscribe(user => this.userListJson = user)
    }
    checkBalance(userName) {
      let user = this.userListJson.find(x => x.name === userName);
        this.balance = this._globals.getCurrentBalance(user.id);
    }
    
}
