import { Component, OnInit } from '@angular/core';
import { Voter } from 'src/app/models/college';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-culturalactivities',
  templateUrl: './culturalactivities.component.html',
  styleUrls: ['./culturalactivities.component.css']
})
export class CulturalactivitiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
