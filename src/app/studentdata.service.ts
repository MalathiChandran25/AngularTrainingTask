import { students } from './students';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class StudentdataService {

  url = "http://localhost:3001/school/student-details";

  constructor(private http : HttpClient) { }

  getdatas(){
    return this.http.get<students[]>(this.url);
  }
}
