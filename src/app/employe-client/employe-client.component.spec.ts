import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeClientComponent } from './employe-client.component';

describe('EmployeClientComponent', () => {
  let component: EmployeClientComponent;
  let fixture: ComponentFixture<EmployeClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
