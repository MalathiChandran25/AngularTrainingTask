import { UsersdataService } from './../usersdata.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, AbstractControl, Validators, FormBuilder } from '@angular/forms';
import {Users} from '../users';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import{HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({});

  error : string;

  typeValue : boolean = false;

  closeResult: string;

  loginName: string;
  
  @Input() modalname : any;

  @Output() changeModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  public sendchangeModalValue(data : boolean) : void{
    this.changeModal.emit(data);
  }

  @Output() submittedFormvalue : EventEmitter<any> = new EventEmitter<any>();

  @Output() displayProfile: EventEmitter<string> = new EventEmitter<string>();

  public displayLoginName(data : string) : void{
    console.log("display name");
    console.log(data);
    this.displayProfile.emit(data);
  }

  constructor(private userservice : UsersdataService,public httpClient: HttpClient,private modalService: NgbModal,private fb : FormBuilder) { }
  
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      name : ['',[Validators.required]],
      password: ['',[Validators.required]],
    });
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } 
    else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } 
    else {
      return  `with: ${reason}`;
    }
  }

  displayInputField(){
    this.typeValue = true;
  }

  onSubmit(){

    this.submittedFormvalue.emit(this.loginForm.value);

    // this.userservice.sendPostRequest(this.loginForm.value).subscribe(
    //   (res) => {
    //     console.log("post res");
    //     console.log(res);
    //     this.modalname.dismiss("successful login");
    //     this.loginName = this.loginForm.value.name;
    //     // this.displayLoginName(true);
    //     this.error = "";
    //   },
    //   (error) => {
    //     this.error = error.error.error;
    //   }
    // );
  }
}

