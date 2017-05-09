import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TobaccoUseComponent } from './tobacco-use.component';

describe('TobaccoUseComponent', () => {
  let component: TobaccoUseComponent;
  let fixture: ComponentFixture<TobaccoUseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TobaccoUseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TobaccoUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
