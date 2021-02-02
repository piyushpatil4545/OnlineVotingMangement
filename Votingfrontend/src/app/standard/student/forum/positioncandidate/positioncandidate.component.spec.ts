import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositioncandidateComponent } from './positioncandidate.component';

describe('PositioncandidateComponent', () => {
  let component: PositioncandidateComponent;
  let fixture: ComponentFixture<PositioncandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositioncandidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositioncandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
