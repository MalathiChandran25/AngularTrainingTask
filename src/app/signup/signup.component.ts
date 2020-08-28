import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators, AbstractControl } from '@angular/forms';
import { UsersdataService } from './../usersdata.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  signupForm = new FormGroup({});

  submitted : boolean = true;

  error : string;

  nameValue : boolean = false;
  emailValue : boolean = false;
  passwordValue : boolean = false;
  roleValue : boolean = false;

  roleList : any = ['student','admin','mentor'];

  @Input() modalname : any;

  @Output() goToLogin: EventEmitter<boolean> = new EventEmitter<boolean>();

  public gotoLoginPage(data : boolean): void{
    this.goToLogin.emit(data);
  }

  constructor(private userservice : UsersdataService,private fb : FormBuilder) { 

    this.signupForm = this.fb.group(
    {
      name : ['',[Validators.required]],
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required]],
      role: ['',[Validators.required]],
      checkTerms: ['',[Validators.required]]
    },
    {
      validator: this.checkCheckbox
    });
  }

  ngOnInit(): void {
    console.log(this.modalname);
    
  }

  checkCheckbox(c: AbstractControl){
    if(c.get('checkTerms').value == false){
      return false;
    }
    else
      return true;
  } 

  displayNameField(){
    this.nameValue = true;
  }
  displayEmailField(){
    this.emailValue = true;
  }
  displayPasswordField(){
    this.passwordValue = true;
  }
  displayRoleField(){
    this.roleValue = true;
  }

  get formControls(){
    return this.signupForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    this.userservice.addData(this.signupForm.value).subscribe(
      (res) => {
        console.log("post res");
        console.log(res);
        this.modalname.dismiss('successfully signed in');
      },
      (error) => {
        this.error = error.error.error;
      }
    );
  }

}
