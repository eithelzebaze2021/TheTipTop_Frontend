import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeCompteComponent } from './employe-compte.component';

describe('EmployeCompteComponent', () => {
  let component: EmployeCompteComponent;
  let fixture: ComponentFixture<EmployeCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeCompteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
