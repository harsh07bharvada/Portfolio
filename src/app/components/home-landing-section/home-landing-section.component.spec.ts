import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLandingSectionComponent } from './home-landing-section.component';

describe('HomeLandingSectionComponent', () => {
  let component: HomeLandingSectionComponent;
  let fixture: ComponentFixture<HomeLandingSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLandingSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLandingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
