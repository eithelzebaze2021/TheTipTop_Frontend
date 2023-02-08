import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeTicketComponent } from './employe-ticket.component';

describe('EmployeTicketComponent', () => {
  let component: EmployeTicketComponent;
  let fixture: ComponentFixture<EmployeTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
