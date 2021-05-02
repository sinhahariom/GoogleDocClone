import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SaveDataService {

  
  constructor(private http: HttpClient, private router: Router) { }

  public saveInDB(doc) {
    console.log('req came for save');
    return this.http.post('https://localhost:8081/saveDoc', doc);
  }

  public getDocById(id) {
    return this.http.get(
      `localhost:8081/getDocById?id=${id}`
    );
  }
}
