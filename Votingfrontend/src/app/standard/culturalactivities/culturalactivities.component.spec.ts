import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturalactivitiesComponent } from './culturalactivities.component';

describe('CulturalactivitiesComponent', () => {
  let component: CulturalactivitiesComponent;
  let fixture: ComponentFixture<CulturalactivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CulturalactivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturalactivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
