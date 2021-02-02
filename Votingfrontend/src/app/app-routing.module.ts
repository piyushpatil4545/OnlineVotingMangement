import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CandidateComponent } from './standard/admin/dashboard/candidate/candidate.component';
import { UpdatecandidateComponent } from './standard/admin/dashboard/candidate/updatecandidate/updatecandidate.component';
import { ViewcandidateComponent } from './standard/admin/dashboard/candidate/viewcandidate/viewcandidate.component';
import { DashboardComponent } from './standard/admin/dashboard/dashboard.component';
import { AddvoterComponent } from './standard/admin/dashboard/voter/addvoter/addvoter.component';
import { UpdateComponent } from './standard/admin/dashboard/voter/update/update.component';
import { ViewComponent } from './standard/admin/dashboard/voter/view/view.component';
import { VoterComponent } from './standard/admin/dashboard/voter/voter.component';
import { ResultComponent } from './standard/electionmanager/result/result.component';
import { ResultvoterComponent } from './standard/electionmanager/result/resultvoter/resultvoter.component';
import { CandidateviewComponent } from './standard/student/forum/candidateview/candidateview.component';
import { ForumComponent } from './standard/student/forum/forum.component';
import { PositioncandidateComponent } from './standard/student/forum/positioncandidate/positioncandidate.component';
import { RegistercandidateComponent } from './standard/student/forum/registercandidate/registercandidate.component';
import { UpdatestudentComponent } from './standard/student/forum/updatestudent/updatestudent.component';



const routes: Routes = [

  {path:'dashboard',component:DashboardComponent},
  {path:'voter',component:VoterComponent},
  {path:'update',component:UpdateComponent},
  {path:'view',component:ViewComponent},
  {path:'view/:name',component:ViewComponent},
  {path:'candidate',component:CandidateComponent},
  {path:'viewcandidate',component:ViewcandidateComponent},
  {path:'viewcandidate/:name',component:ViewcandidateComponent},
  {path:'forum',component:ForumComponent},
  {path:'registercandidate',component:RegistercandidateComponent},
  {path:'updatecandidate',component:UpdatecandidateComponent},
  {path:'updatecandidate/:name',component:UpdatecandidateComponent},
  {path:'addvoter',component:AddvoterComponent},
  {path:'update/:name',component:UpdateComponent},
  {path:'result',component:ResultComponent},
  {path:'updatestudent',component:UpdatestudentComponent},
  {path:'candidateview',component:CandidateviewComponent},
  {path:'positioncandidate/:position',component:PositioncandidateComponent},
  {path:'positioncandidate',component:PositioncandidateComponent},
  {path:'updatestudent/:name',component:UpdatestudentComponent},
  {path:'resultvoter',component:ResultvoterComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
