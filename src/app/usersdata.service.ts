import { Users } from './users';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersdataService {

  url_users = "http://localhost:3001/login";

  url_add_data = "http://localhost:3001/addUser";

  url_changepassword = "http://localhost:3001/changePassword";

  constructor(private http : HttpClient) { }


  sendPostRequest(data: any) {
    console.log("request inside data");
    console.log(data);
    return this.http.post(this.url_users, data);
  }

  addData(data : any) {
    console.log("added data comes");
    console.log(data);
    return this.http.post(this.url_add_data,data);
  }

  updatepassword(data : any){
    console.log("update service");
    console.log(data);
    return this.http.put(this.url_changepassword,data);
  }
}
