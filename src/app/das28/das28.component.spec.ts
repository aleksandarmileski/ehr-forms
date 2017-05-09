import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Das28Component } from './das28.component';

describe('Das28Component', () => {
  let component: Das28Component;
  let fixture: ComponentFixture<Das28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Das28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Das28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
