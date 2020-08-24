import { students } from './../students';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentdataService } from '../studentdata.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss']
})
export class StudentCardComponent implements OnInit {


  // @Input() studentcarddetails : students;

  no_value :string = 'NA';

  studentcarddetails : students;


  constructor(private route: ActivatedRoute,
    private Userservice: StudentdataService,
    private location: Location) { }

  getStudentData(): void {
    console.log("data got");
    const name = this.route.snapshot.paramMap.get('Name');
    console.log(name);
    this.Userservice.getStudentData(name)
        .subscribe(studentcarddetails => this.studentcarddetails = studentcarddetails);
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.getStudentData();
  }

}
