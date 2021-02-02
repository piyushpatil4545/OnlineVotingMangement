
import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/models/college';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultvoter',
  templateUrl: './resultvoter.component.html',
  styleUrls: ['./resultvoter.component.css']
})
export class ResultvoterComponent implements OnInit {
   president: Candidate;
   vpevents: Candidate;
   vicepresident: Candidate;
  treasurer: Candidate;
  constructor(private _service:HttpService,private _router:Router,  ) { }
  ngOnInit(): void {
    this._service.fetchTopPresidentCandidate().subscribe(
      data => {
        console.log("response recieved", data);
        this.president = data;
      },
      error=>console.log("exception occured")
    );
    this._service.fetchTopVicePresidentCandidate().subscribe(
      data => {
        console.log("response recieved", data);
        this.vicepresident = data;
      },
      error=>console.log("exception occured")
    );
    this._service.fetchTopViceEventsCandidate().subscribe(
      data => {
        console.log("response recieved", data);
        this.vpevents = data;
      },
      error=>console.log("exception occured")
    );

    this._service.fetchTopTreasurerCandidate().subscribe(
      data => {
        console.log("response recieved", data);
        this.treasurer = data;
      },
      error=>console.log("exception occured")
    );
    }

    logout(){
      console.log('go back');
      this._router.navigate(['electionmanager']);
    }
    
    
    
    back(){
      console.log('go back');
      this._router.navigate(['result']);
    }
}

