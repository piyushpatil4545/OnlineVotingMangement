import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionmanagerComponent } from './electionmanager.component';

describe('ElectionmanagerComponent', () => {
  let component: ElectionmanagerComponent;
  let fixture: ComponentFixture<ElectionmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectionmanagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectionmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
