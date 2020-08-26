import { Component, OnInit } from '@angular/core';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';

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

  stopCrossopen : boolean = true;
  
  constructor(private modalService: NgbModal) {}
    
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
