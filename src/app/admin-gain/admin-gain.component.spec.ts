import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGainComponent } from './admin-gain.component';

describe('AdminGainComponent', () => {
  let component: AdminGainComponent;
  let fixture: ComponentFixture<AdminGainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
