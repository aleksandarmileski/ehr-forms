import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialAnamesisComponent } from './social-anamesis.component';

describe('SocialAnamesisComponent', () => {
  let component: SocialAnamesisComponent;
  let fixture: ComponentFixture<SocialAnamesisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialAnamesisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialAnamesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
