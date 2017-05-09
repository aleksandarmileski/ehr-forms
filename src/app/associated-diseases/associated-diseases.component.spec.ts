import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociatedDiseasesComponent } from './associated-diseases.component';

describe('AssociatedDiseasesComponent', () => {
  let component: AssociatedDiseasesComponent;
  let fixture: ComponentFixture<AssociatedDiseasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociatedDiseasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociatedDiseasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
