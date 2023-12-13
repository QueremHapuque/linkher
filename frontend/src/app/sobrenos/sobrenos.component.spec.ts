import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobrenosComponent } from './sobrenos.component';

describe('SobrenosComponent', () => {
  let component: SobrenosComponent;
  let fixture: ComponentFixture<SobrenosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SobrenosComponent]
    });
    fixture = TestBed.createComponent(SobrenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
