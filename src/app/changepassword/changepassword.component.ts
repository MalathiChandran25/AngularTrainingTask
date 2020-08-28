import { Component, OnInit,Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators,AbstractControl } from '@angular/forms';
import { UsersdataService } from './../usersdata.service';
import { ConfirmedValidator } from './../confirmed.validator';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {

  changepasswordForm = new FormGroup({});

  typeValue : boolean = false;

  @Input() modalname : any;

  constructor(private userservice : UsersdataService,private fb: FormBuilder,private route: ActivatedRoute,private  router: Router) { 
  }

  ngOnInit(): void {
    console.log(this.modalname);
    this.changepasswordForm = this.fb.group({
      email : ['',[Validators.required,Validators.email]],
      password: ['', [Validators.required]],
      confirmpassword: ['', [Validators.required]]
    }, { 
      validator: ConfirmedValidator('password','confirmpassword')
    });
  }
  displayInputField(){
    this.typeValue = true;
  }
  
  get formControls(){
    return this.changepasswordForm.controls;
  }
  onSubmit() {

    // this.router.navigate(['successpassword', this.changepasswordForm.value]);
    this.userservice.updatepassword(this.changepasswordForm.value).subscribe(
      (res) => {
        console.log("update password");
        console.log(res);        
        this.modalname.dismiss('routing');
        this.router.navigate(['successpassword', this.changepasswordForm.value]);
      },
      (error) => {
        console.log(error.error.error);
      }
    );
  }

}
