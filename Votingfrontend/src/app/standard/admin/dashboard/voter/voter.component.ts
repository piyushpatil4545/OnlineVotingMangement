import { Component, OnInit } from '@angular/core';
import { Voter } from 'src/app/models/college';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {

  voters: Voter[];
  constructor(private _service:HttpService,private _router:Router) { }

  ngOnInit(): void {
    this._service.fetchVoterList().subscribe(
      data => {
        console.log("response recieved", data);
        this.voters = data;
      },
      error=>console.log("exception occured")
    ) 
    }
    back(){
      console.log('go back');
      this._router.navigate(['dashboard']);
    }
  
    viewVoter(name : string){
      console.log("name" + name);
      this._router.navigate(["/view", name]);
    }
    updateVoter(name :String){
      console.log("name" + name);
      this._router.navigate(["/update",name]);
    }
    logout(){
      console.log('go back');
      this._router.navigate(['admin']);
      localStorage.removeItem('email');
    }
    
    addVoter(){
      console.log('go back');
      this._router.navigate(['addvoter']);
    }

    delete(name: string){

      this._service.deleteVoterByName(name).subscribe(

        data =>{ 
           console.debug("deleted automatically");
           this.ngOnInit();
           alert("Are You sure u want to delete ?");
           this._router.navigate(['voter']);
          
        }
      )

    }
  
  }

  



