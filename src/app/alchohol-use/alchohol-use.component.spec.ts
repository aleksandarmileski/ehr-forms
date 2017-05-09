import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlchoholUseComponent } from './alchohol-use.component';

describe('AlchoholUseComponent', () => {
  let component: AlchoholUseComponent;
  let fixture: ComponentFixture<AlchoholUseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlchoholUseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlchoholUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
