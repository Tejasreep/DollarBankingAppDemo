import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../common/common.service';
import { Globals } from '../common/globals';

@Component({
  selector: 'app-check-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class CheckStatementComponent {

    selectedUser="";
    checkStatementForm: FormGroup;
    userListJson = [];
    transactions = [];
  
     constructor(private _service:CommonService, private _globals:Globals) {
  
     }
  
    ngOnInit() {
      this.checkStatementForm = new FormGroup({
        userName: new FormControl('',Validators.required)
      });
  
      this.getUserList();
    }
  
    onSubmit(form: FormGroup) {
      this.getTransaction(form.value.userName);
      form.reset();
    }
  
    getUserList() {
       this._service.getUserList().subscribe(user => this.userListJson = user)
    }

    getTransaction(name) {
      let user = this.userListJson.find(x => x.name === name);
      this.transactions = this._globals.transaction.filter(x => x.id === user.id);
    }
  
}
