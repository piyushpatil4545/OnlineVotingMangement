import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Voter } from 'src/app/models/college';
import { HttpService } from 'src/app/services/http.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

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

  back(){
    console.log('go back');
    this._router.navigate(['voter']);
  }


}
