import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Voter } from 'src/app/models/college';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  alert:boolean=false
  voter = new Voter();
  constructor(private _service:HttpService,private _router:Router, private _activatedRoute :ActivatedRoute) {}

  ngOnInit(): void {

    let name = this._activatedRoute.snapshot.paramMap.get('name');
    this._service.fetchVoterByName(name).subscribe(
      data=>{
      console.log("data recieved");
      this.voter=data;
    },
    error => console.log("expection occured ")
    
    )
  }

    
updateVoter(){
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


}
