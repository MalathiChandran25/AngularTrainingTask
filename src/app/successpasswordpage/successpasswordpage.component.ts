import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UsersdataService } from './../usersdata.service';


@Component({
  selector: 'app-successpasswordpage',
  templateUrl: './successpasswordpage.component.html',
  styleUrls: ['./successpasswordpage.component.scss']
})
export class SuccesspasswordpageComponent implements OnInit {


  formvalue : any;
  constructor(private route: ActivatedRoute,private  router: Router,private userservice : UsersdataService) {
   }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        console.log(params);
      }
    );
  }

}
