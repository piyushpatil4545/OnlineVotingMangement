import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { CulturalactivitiesComponent } from './culturalactivities/culturalactivities.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { VoterComponent } from './admin/dashboard/voter/voter.component';
import { UpdateComponent } from './admin/dashboard/voter/update/update.component';
import { ViewComponent } from './admin/dashboard/voter/view/view.component';
import { CandidateComponent } from './admin/dashboard/candidate/candidate.component';
import { ViewcandidateComponent } from './admin/dashboard/candidate/viewcandidate/viewcandidate.component';
import { ForumComponent } from './student/forum/forum.component';

import { RegistercandidateComponent } from './student/forum/registercandidate/registercandidate.component';
import { UpdatecandidateComponent } from './admin/dashboard/candidate/updatecandidate/updatecandidate.component';
import { AddvoterComponent } from './admin/dashboard/voter/addvoter/addvoter.component';
import { ElectionmanagerComponent } from './electionmanager/electionmanager.component';
import { ResultComponent } from './electionmanager/result/result.component';
import { UpdatestudentComponent } from './student/forum/updatestudent/updatestudent.component';
import { CandidateviewComponent } from './student/forum/candidateview/candidateview.component';
import { PositioncandidateComponent } from './student/forum/positioncandidate/positioncandidate.component';
// import {Http} from 'src/app/services/http.service';
import {AuthGuard} from '../auth.guard';
import { Routes } from '@angular/router';
import { ResultvoterComponent } from './electionmanager/result/resultvoter/resultvoter.component';
const routes:Routes=[

  {path:'student',component:StudentComponent,canActivate:[AuthGuard]},
  {path:'admin',component:AdminComponent},
]

@NgModule({
  declarations: [
    HomeComponent, 
    AdminComponent,
    StudentComponent,
    CulturalactivitiesComponent, 
    AboutusComponent, 
    ContactusComponent, DashboardComponent, VoterComponent, UpdateComponent, ViewComponent, CandidateComponent, ViewcandidateComponent, ForumComponent, RegistercandidateComponent, UpdatecandidateComponent, AddvoterComponent, ElectionmanagerComponent, ResultComponent, UpdatestudentComponent, CandidateviewComponent, PositioncandidateComponent, ResultvoterComponent

    ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  exports:[
    HomeComponent, 
    AdminComponent,
    StudentComponent, 
    CulturalactivitiesComponent, 
    AboutusComponent,
    ContactusComponent,
    ElectionmanagerComponent

  ]
})
export class StandardModule { }
