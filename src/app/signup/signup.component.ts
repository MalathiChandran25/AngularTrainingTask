import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import { UsersdataService } from './../usersdata.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  signupForm = new FormGroup({});

  error : string;

  typeValue : boolean = false;

  @Output() goToLogin: EventEmitter<boolean> = new EventEmitter<boolean>();

  public gotoLoginPage(data : boolean): void{
    this.goToLogin.emit(data);
  }

  constructor(private userservice : UsersdataService,private fb : FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name : ['',[Validators.required]],
      email: ['',[Validators.required]],
      password : ['',[Validators.required]],
      role: ['',[Validators.required]],
    });
  }

  displayInputField(){
    this.typeValue = true;
  }

  onSubmit(){
    this.userservice.addData(this.signupForm.value).subscribe(
      (res) => {
        console.log("post res");
        console.log(res);
      },
      (error) => {
        this.error = error.error.error;
      }
    );
  }

}
