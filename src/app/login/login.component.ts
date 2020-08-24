import { UsersdataService } from './../usersdata.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, AbstractControl, ValidatorFn, FormBuilder } from '@angular/forms';
import {Users} from '../users';
import{HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    name : new FormControl(''),
    password : new FormControl(''),
  });

  user : boolean;

  userdatalist : Users[];

  constructor(private userservice : UsersdataService,private formBuilder : FormBuilder,public httpClient: HttpClient) { }
  
  sendPostRequest(data: any) {
    console.log("request inside data");
    console.log(data);
    return this.httpClient.post('http://localhost:3001/login', data);
  }

  ngOnInit(): void {
    this.userservice.getusers().subscribe((result) => {
      console.log(result);
      this.userdatalist=result;
      console.log("userdatalist");
      console.log(this.userdatalist);
  });
  
  }

  getname(){
    return this.loginForm.get('name');
  }
  getpassword(){
    return this.loginForm.get('password');
  }

  onSubmit(){
    this.sendPostRequest(this.loginForm.value).subscribe(
      res => {
        console.log("post res");
        console.log(res);
      }
    );
    if((this.userdatalist.find(userdata => userdata.password === this.loginForm.controls['password'].value) && ((this.userdatalist.find(userdata => userdata.name === this.loginForm.controls['username'].value) || this.userdatalist.find(userdata => userdata.email === this.loginForm.controls['name'].value))))){
      console.log("match data");
      this.user = false;
    }
    else{
      console.log("unmatch data");
      this.user = true;
    }
    if (this.loginForm.valid) {
      console.log("Form valid ");
    }
    console.log(this.loginForm.value);
  }

}

