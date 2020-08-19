import { STUDENTS } from './studentsList';
import { students } from './students';
import { Component } from '@angular/core';
import { StudentdataService } from './studentdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo1';

  // studentlist : students[] = STUDENTS;

  data : students[];

  
  constructor(private studentlist : StudentdataService) { }

  ngOnInit(): void {
    this.studentlist.getdatas().subscribe((result) => {
        console.log(result);
        this.data=result;
      })
  }

  studentdata : students;
  selectedstudentdata(student : students) : void {
    this.studentdata = student;
  }


}
