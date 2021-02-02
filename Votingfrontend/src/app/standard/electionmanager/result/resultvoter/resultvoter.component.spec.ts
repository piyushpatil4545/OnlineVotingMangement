import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultvoterComponent } from './resultvoter.component';

describe('ResultvoterComponent', () => {
  let component: ResultvoterComponent;
  let fixture: ComponentFixture<ResultvoterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultvoterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultvoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
