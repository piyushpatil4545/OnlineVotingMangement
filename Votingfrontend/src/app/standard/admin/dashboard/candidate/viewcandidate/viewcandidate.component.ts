
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidate } from 'src/app/models/college';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-viewcandidate',
  templateUrl: './viewcandidate.component.html',
  styleUrls: ['./viewcandidate.component.css']
})
export class ViewcandidateComponent implements OnInit {

 
  candidate = new Candidate();
  constructor(private _service:HttpService,private _router:Router, private _activatedRoute :ActivatedRoute) {}


  ngOnInit(): void {


    let name = this._activatedRoute.snapshot.paramMap.get('name');
    this._service.fetchCandidateByName(name).subscribe(
      data=>{
      console.log("data recieved");
      this.candidate=data;
    },
    error => console.log("expection occured ")
    
    )
  }
 gotolist(){
    console.log('go back');
    this._router.navigate(['candidate']);
  }
}