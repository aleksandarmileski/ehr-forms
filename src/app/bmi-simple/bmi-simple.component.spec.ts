import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiSimpleComponent } from './bmi-simple.component';

describe('BmiSimpleComponent', () => {
  let component: BmiSimpleComponent;
  let fixture: ComponentFixture<BmiSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmiSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmiSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
