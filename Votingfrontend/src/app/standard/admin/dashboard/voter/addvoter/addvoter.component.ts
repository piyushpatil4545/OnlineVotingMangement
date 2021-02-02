import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Voter } from 'src/app/models/college';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-addvoter',
  templateUrl: './addvoter.component.html',
  styleUrls: ['./addvoter.component.css']
})
export class AddvoterComponent implements OnInit {

  alert:boolean=false
  voter = new Voter();
  constructor(private _service:HttpService,private _router:Router, private _activatedRoute :ActivatedRoute) {}

  ngOnInit(): void {
  }

  addVoter(){

    this._service.addVoter(this.voter).subscribe
    (
      data =>
      {
     
        console.log("data added successfull");
        //  this._router.navigate(['voter']);
        this.alert=true 
      },
      error =>console.log("error")
    )
    this.alert=true
  }

  
back(){
  console.log('go back');
  this._router.navigate(['voter']);
}

logout(){
  console.log('go back');
  this._router.navigate(['admin']);
  localStorage.removeItem('email');
}
}
