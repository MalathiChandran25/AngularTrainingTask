import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators,AbstractControl } from '@angular/forms';
import { UsersdataService } from './../usersdata.service';
import { ConfirmedValidator } from './../confirmed.validator';
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {

  changepasswordForm = new FormGroup({});

  typeValue : boolean = false;

  constructor(private userservice : UsersdataService,private fb: FormBuilder) { 
  }

  ngOnInit(): void {
    this.changepasswordForm = this.fb.group({
      email : ['',[Validators.required]],
      password: ['', [Validators.required]],
      confirmpassword: ['', [Validators.required]]
    }, { 
      validator: ConfirmedValidator('password','confirmpassword')
    });
  }
  displayInputField(){
    this.typeValue = true;
  }
  
  onSubmit() {
    this.userservice.updatepassword(this.changepasswordForm.value).subscribe(
      (res) => {
        console.log("update password");
        console.log(res);        
      },
      (error) => {
        console.log(error.error.error);
      }
    );
  }

}
