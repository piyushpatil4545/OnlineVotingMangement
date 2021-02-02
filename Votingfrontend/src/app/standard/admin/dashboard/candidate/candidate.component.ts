


import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/models/college';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';
// import { Popup } from 'ng2-opd-popup';
@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

 candidates: Candidate[];
  constructor(private _service:HttpService,private _router:Router,  ) { }
  // constructor(private _service:HttpService,private _router:Router, private popup:Popup ) { }
 ngOnInit(): void {
    this._service.fetchCandidateList().subscribe(
      data => {
        console.log("response recieved", data);
        this.candidates = data;
      },
      error=>console.log("exception occured")
    ) 
    }
    back(){
      console.log('go back');
      this._router.navigate(['dashboard']);
    }
  

    viewCandidate(name : string){
      console.log("name" + name);
      this._router.navigate(["/viewcandidate", name]);
    }
    
logout(){
  console.log('go back');
  this._router.navigate(['admin']);
  sessionStorage.removeItem('email');
}
delete(candidate_id: number){


   
  this._service.deleteCandidateById(candidate_id).subscribe(
   
    data =>{ 
      // this.popup.show();
       console.debug("deleted automatically");
      //  this._router.navigate(["/candidate"]);
      this.ngOnInit();
      alert("Are You sure u want to delete ?");
      this._router.navigate(['candidate']);
    }
  )

}


updateCandidate(name :string){
  console.log("id" +name);
  this._router.navigate(['/updatecandidate',name]);
}


}