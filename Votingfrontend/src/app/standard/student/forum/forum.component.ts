import { Component, OnInit } from '@angular/core';
import { Voter } from 'src/app/models/college';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  voter = new Voter();
  voters: Voter[];
  constructor(private _service:HttpService,private _router:Router) { }

  ngOnInit(): void {
  }

  candidateRegistration(){

    this._router.navigate(["/registercandidate"]);
  }
  updateStudent(name :String){
    console.log("name" + name);
    this._router.navigate(["/updatestudent",name]);
  }

  candidateView(){
    this._router.navigate(["/candidateview"]);
  }

  logout(){
    console.log('go back');
    sessionStorage.removeItem('email');
  // sessionStorage.removeItem('password');
    this._router.navigate(['student']);
  }


}
