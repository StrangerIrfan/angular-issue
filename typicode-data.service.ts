import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { pipe } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class TypicodeDataService {
dataUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(this.dataUrl)
    .pipe(
      catchError( this.handleError)
    );
  }

  createUsers(titleInput){  
    return this.http.post(this.dataUrl, titleInput);   
  }

  updateUser(mypost){
    //return this.http.patch(this.dataUrl, ({isRead: true}));
     
  }

  handleError(error: HttpErrorResponse){
    console.log(error.message);
    return throwError('Error in http irfan');
  }
}
