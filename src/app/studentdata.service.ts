
import { students } from './students';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentdataService {

  url = "http://localhost:3001/school/student-details";

  studentDataObject : students[] ;

  constructor(private http : HttpClient) { }

  getdatas(){
    return this.http.get<students[]>(this.url);
  }
  addstudentdata(studentsdatas : students[]){
    console.log("data come");
    console.log(studentsdatas);
    this.studentDataObject = studentsdatas;
    console.log("add datas");
    console.log(this.studentDataObject);
  }

  getStudentData(name : string): Observable <students>{
    return of(this.studentDataObject.find(student => student.Name === name) );
  }

}
