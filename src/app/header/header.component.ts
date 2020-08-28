import { Component, OnInit } from '@angular/core';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersdataService } from './../usersdata.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  closeResult: string;

  displayChangePassword : boolean = false;

  openLogin : boolean;

  displayLoginPage : boolean = false;

  profileNameValue : string ="";
  
  constructor(private modalService: NgbModal,private userservice:UsersdataService) {}
    
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

  toggleOpenLoginVar(change : boolean){
    this.openLogin = change;
  }

  ngOnInit(): void {
  }

  changePasswordModal(displayModal : boolean):void{
    this.displayChangePassword = displayModal;
    if(this.openLogin){
     this.openLogin = true;
    }
  }

  changeToProfileName(event : any):void{
    console.log("profileName variable");
    console.log(event);
    // this.profileNameValue = profileName;
    // console.log(this.profileNameValue);

    this.userservice.sendPostRequest(event).subscribe(
        (res) => {
          console.log("post res");
          console.log(res);
          this.profileNameValue = event.name;
          console.log(this.profileNameValue);
          // mymodallogin.dismiss("logged in successfully");
        },
        (error) => {
          // this.error = error.error.error;
          console.log(error.error.error);
        });
  }

  loginPage(displayLogin : boolean): void{
    this.openLogin = false;
    this.displayChangePassword = false;
  }

  openLoginModal(modalName, modalChangevalue){
    this.displayChangePassword = false;
    this.open(modalName);
    this.toggleOpenLoginVar(modalChangevalue);
  }

}
