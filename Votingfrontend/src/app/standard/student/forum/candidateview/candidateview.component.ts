
import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/models/college';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-candidateview',
  templateUrl: './candidateview.component.html',
  styleUrls: ['./candidateview.component.css']
})
export class CandidateviewComponent implements OnInit {
  positions:string[];
 candidate: Candidate[];
   
  // candidate = new Candidate();
  constructor(private _service:HttpService,private _router:Router,  ) { }
  // constructor(private _service:HttpService,private _router:Router, private popup:Popup ) { }
  ngOnInit(): void {
    this._service.fetchCandidateList().subscribe(
      data => {
        console.log("response recieved", data);
        this.candidate = data;
      },
      error=>console.log("exception occured")
    ) 
     this._service.fetchAllPosition().subscribe(
      data => {
        console.log("response recieved", data);
        this.positions = data;
      }
     )
    }
    back(){
      console.log('go back');
      this._router.navigate(['forum']);
    }
  
    
    getCandidateByPosition(position : string){
    this._service.fetchCandidateByPosition(position).subscribe(
   
       data => {
        console.log("Response recieved",data);
    this.candidate = data;
     },
       error=>console.log("Exception occurred")


    )

  }
    voteCandidate(candidate_id: number){
      this._service.voteCandidateById(candidate_id).subscribe(

        data =>{
          console.debug("Succussfully Voted");
          
          alert("Confirm your VOTE ?");
          // this._router.navigate(['candidateview'])
        }
      )
      
   
}
logout(){
  console.log('go back');
  sessionStorage.removeItem('email');
  // sessionStorage.removeItem('password');
  this._router.navigate(['student']);

}
downloadPdf(){

const doc = new jsPDF();
doc.text('Guidelines For Student Council Election 2020-21',40,10);
doc.text('Students should follow these guidelines ',40,20);

doc.setFontSize(10);
doc.text('* Students are required to either use a laptop or a desktop ',10,40);
doc.text(' * A mail regarding the login credentials will be sent on your registered email ',10,50);
doc.text(' * After candidate registration you will get another mail with the credentials of candidate ',10,60);
doc.text(' * Students have to keep in  mind that they will get only one chance to vote once  ',10,70);
doc.text(' * Aslo the voting process will be active from 10:AM to 5:00 PM ',10,80);

 doc.save('Guidelines.pdf');
//  doc.text(20, 20, 'Hello world!');
//         // doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
        // doc.addPage();
        // doc.text(20, 20, 'Do you like that?');
//         var doc = new jsPDF();
// doc.setFontSize(22);
// doc.text(20, 20, 'This is a title');

// doc.setFontSize(16);
// doc.text(20, 30, 'This is some normal sized text underneath.');	

// // Output as Data URI
// doc.output('datauri');




}

}