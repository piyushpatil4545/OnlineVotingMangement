import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/models/college';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-positioncandidate',
  templateUrl: './positioncandidate.component.html',
  styleUrls: ['./positioncandidate.component.css']
})
export class PositioncandidateComponent implements OnInit {

  // candidates = new Candidate();
candidate: Candidate[];
  constructor(private _service:HttpService,private _router:Router, private _activatedRoute :ActivatedRoute ) { }

  ngOnInit(): void {

    
    let position = this._activatedRoute.snapshot.paramMap.get('position');
    this._service.fetchCandidateByPosition(position).subscribe(
      data=>{
      console.log("data recieved");
      this.candidate=data;
    },
    error => console.log("expection occured ")
    
    )
  }
  back(){
    console.log('go back');
    this._router.navigate(['candidateview']);
  }
}
