import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevProcessSectionComponent } from './dev-process-section.component';

describe('DevProcessSectionComponent', () => {
  let component: DevProcessSectionComponent;
  let fixture: ComponentFixture<DevProcessSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevProcessSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevProcessSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
