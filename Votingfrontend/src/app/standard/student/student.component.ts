


import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import {Router} from "@angular/router";
import { VoterForm } from 'src/app/admin';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {


 voter = new VoterForm();
msg;
error:any=" ";
toggle:any=false;

  constructor(private _service: HttpService,private _router: Router) { }

  ngOnInit(): void {
    
 //this.admin.email = 'pp@getMaxListeners.com';
 



  }
  voterLogin(){

   
    if(sessionStorage.getItem('email') )
    {
     this. toggle=
  true;   
   this.error = "You have allready Login ";
    }
  
  else{

  
  
    this._service.loginVoter(this.voter).subscribe(
      responseData =>
      {
      // window.localStorage.setItem("voter", responseData.email);
      //window.localStorage.setItem("admin", responseData.name);


      // console.log("response recived");
      console.log( responseData);
      sessionStorage.setItem('email', responseData.email);
      console.log(sessionStorage.getItem('voter'));
      // sessionStorage.setItem('password',responseData.password);
      console.log("response recived");
      this._router.navigate(["/forum"]);
    },
    error =>{
      console.log("exception occured");
      this.msg="Bad credentials,Please enter valid email and password";
      this._router.navigate(["/sudent"]);
    }
    )
  }
  }

// voterLogin(){
   
//       this._service.loginVoter(this.voter).subscribe(
//         responseData =>
//         {
//         //  window.localStorage.setItem("voter", responseData.email);
//         // window.localStorage.setItem("admin", responseData.name);
//         console.log("response recived");
//         this._router.navigate(["/forum"]);
//       },
//       error =>{
//         console.log("exception occured");
//         this.msg="Bad credentials,Please enter valid email and password";
//       }
//       )
//     }








    
}