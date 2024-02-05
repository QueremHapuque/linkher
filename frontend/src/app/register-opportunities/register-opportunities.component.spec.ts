import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterOpportunitiesComponent } from './register-opportunities.component';

describe('RegisterOpportunitiesComponent', () => {
  let component: RegisterOpportunitiesComponent;
  let fixture: ComponentFixture<RegisterOpportunitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterOpportunitiesComponent]
    });
    fixture = TestBed.createComponent(RegisterOpportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
