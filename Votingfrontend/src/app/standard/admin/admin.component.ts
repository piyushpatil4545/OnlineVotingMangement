
  
  
  
  
import { Component, OnInit } from '@angular/core';
//import { Admin } from 'src/app/models/college';
import { HttpService } from 'src/app/services/http.service';
import {Router} from "@angular/router";
import { AdminForm } from 'src/app/admin';
import {NgForm} from "@angular/forms";
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {



  admin = new AdminForm();
  msg = '';
  error:any=" ";
  toggle:any=false;
  
    constructor(private _service: HttpService,private _router: Router) { }
  
    ngOnInit(): void {
      //this.admin.email = 'kp@getMaxListeners.com';
    }
  
   adminLogin(){
   
       if(localStorage.getItem('email') )
    {
      this. toggle=
  true;   
      this.error = "You have allready Login ";
    }
    
    else {

      this._service.loginAdmin(this.admin).subscribe(
        responseData =>
        {

          
           console.log( responseData);
 localStorage.setItem('email', responseData.email);
         console.log(localStorage.getItem('admin'));
        console.log("response recived");
        this._router.navigate(["/dashboard"]);

      },
      error =>{
        console.log("exception occured");
        this.msg="Bad credentials,Please enter valid email and password";
        this._router.navigate(["/admin"]);
      }

      )
    }
   }
}