
import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import { Candidate } from 'src/app/models/college';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registercandidate',
  templateUrl: './registercandidate.component.html',
  styleUrls: ['./registercandidate.component.css']
})
export class RegistercandidateComponent implements OnInit {
alert:boolean=false
  candidate = new Candidate();
  msg = '';
  
  constructor(private _service:HttpService,private _router:Router) { 
  
    
  }
  
    ngOnInit(): void {
    }
   
  registerCandidate(){

    // Object.keys(this.candidate).forEach(field => { // {1}
    //   const control = this.candidate.field;            // {2}
    //   control.markAsTouched({ onlySelf: true });       // {3}
    // });
    this._service.registerCandidate(this.candidate).subscribe(
      data =>{
        console.log("response recieved");
        this.alert=true
        this.msg="Registration successful";
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
    
    this._router.navigate(['forum']);
  }

}
