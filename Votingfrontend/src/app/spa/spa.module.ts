import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { StandardModule } from '../standard/standard.module'
import {Routes,RouterModule} from '@angular/router';
import { HomeComponent } from '../standard/home/home.component';
import { AdminComponent } from '../standard/admin/admin.component';
import { StudentComponent } from '../standard/student/student.component';
import { AboutusComponent } from '../standard/aboutus/aboutus.component';
import { CulturalactivitiesComponent } from '../standard/culturalactivities/culturalactivities.component';
import { ContactusComponent } from '../standard/contactus/contactus.component';
import { ElectionmanagerComponent } from '../standard/electionmanager/electionmanager.component';




const  routes:Routes=
[
  { path:'',redirectTo:'home',pathMatch:'full'},
 { path:'home',component:HomeComponent},
 { path:'admin',component:AdminComponent},
 { path:'student',component:StudentComponent},
 { path:'culturalactivities',component:CulturalactivitiesComponent},
 { path:'aboutus',component:AboutusComponent},
 { path:'contactus',component:ContactusComponent},
 { path:'electionmanager',component:ElectionmanagerComponent},
]

@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    StandardModule,
    RouterModule.forRoot(routes)
  ],
  exports:[

    ContainerComponent
  ]
})
export class SpaModule { }
