import { Component, OnInit } from '@angular/core';

import { Candidate } from 'src/app/models/college';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatecandidate',
  templateUrl: './updatecandidate.component.html',
  styleUrls: ['./updatecandidate.component.css']
})
export class UpdatecandidateComponent implements OnInit {

alert:boolean=false
candidate = new Candidate();
msg = '';


constructor(private _service:HttpService,private _router:Router , private _activatedRoute:ActivatedRoute ) { 
  
    
}

  ngOnInit(): void {

    let name = this._activatedRoute.snapshot.paramMap.get('name');
     this._service.fetchCandidateByName(name).subscribe(
      data =>{

        console.log("data recieved");
        this.candidate=data;
      },

      error => console.log("exception occured")

     )


  }


  updateCandidate(){
    this._service.addCandidate(this.candidate).subscribe(
      data =>{
        console.log("response recieved");
        this.alert=true
        this.msg="Update successful";
      },
      error => {
        console.log("Exception occured");
        this.msg=error.error;
        
        
      }
    )
    this.alert=true
   }
   back(){
    console.log('go back');
    this._router.navigate(['candidate']);
  }



}
