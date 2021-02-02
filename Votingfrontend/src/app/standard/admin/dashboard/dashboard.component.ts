import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _service:HttpService,private _router:Router) { }

  ngOnInit(): void {
  }

  studentDetails(){

    this._router.navigate(["/voter"]);
  }
  candidateDetails(){

    this._router.navigate(["/candidate"]);
  }
  gotolist(){
    console.log('go back');
    this._router.navigate(['admin']);
    localStorage.removeItem('email');
  }

}
