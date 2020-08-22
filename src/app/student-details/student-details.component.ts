import { StudentdataService } from './../studentdata.service';
import { students } from './../students';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent {


  @Input() studentdatalist : any;

  @Output() selectedstudent:EventEmitter<students> = new EventEmitter<students>();

  // studentdetail : students;
  // onSelect(student : students) {
  //   this.selectedstudent.emit(student);
  // }



}
