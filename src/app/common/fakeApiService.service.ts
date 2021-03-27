import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'

})
export class fakeApiService implements InMemoryDbService {
  createDb() {
    let userList = [
      {
        "id": 1,
        "name": "Tirth"
    },
    {
        "id": 2,
        "name": "Rahul"
    },
    {
        "id": 3,
        "name": "Gaurav"
    },
    {
        "id": 4,
        "name": "pramod"
    }
    ];  
    return {userList};   
  }  
}