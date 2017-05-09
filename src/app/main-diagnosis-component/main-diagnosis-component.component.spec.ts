import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDiagnosisComponentComponent } from './main-diagnosis-component.component';

describe('MainDiagnosisComponentComponent', () => {
  let component: MainDiagnosisComponentComponent;
  let fixture: ComponentFixture<MainDiagnosisComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDiagnosisComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDiagnosisComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
