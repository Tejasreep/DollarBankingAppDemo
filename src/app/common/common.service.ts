import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { fakeApiService } from './fakeApiService.service';

@Injectable({
    providedIn: 'root'
})
export class CommonService {
  constructor(private http: HttpClient, private _apiMockService:fakeApiService) { }
  userListUrl = 'api/userList';
  policyId=1;
  SERVER_URL: string = "http://localhost:8080/api/";

  getUserList(): Observable<any> {
    return this.http.get("assets/userList.json").pipe(
      catchError(this.handleError)
    );
  }
  
  private handleError(error: any) {
    console.error(error);
    return throwError(error);    
  }
}