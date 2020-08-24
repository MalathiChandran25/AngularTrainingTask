import { Users } from './users';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersdataService {

  url_users = "http://localhost:3001/school/users";


  constructor(private http : HttpClient) { }

  getusers(){
    return this.http.get<Users[]>(this.url_users);
  }
}
