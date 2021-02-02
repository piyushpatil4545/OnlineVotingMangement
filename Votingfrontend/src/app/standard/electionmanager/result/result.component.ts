
import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/models/college';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  candidates: Candidate[];
  constructor(private _service:HttpService,private _router:Router,  ) { }
  // constructor(private _service:HttpService,private _router:Router, private popup:Popup ) { }
 ngOnInit(): void {
    this._service.candidateresultList().subscribe(
      data => {
        console.log("response recieved", data);
        this.candidates = data;
      },
      error=>console.log("exception occured")
    ) 
    }

    resultVoterDetails(){

      this._router.navigate(["/resultvoter"]);
    }
    logout(){
      console.log('go back');
      this._router.navigate(['electionmanager']);
    }
  }