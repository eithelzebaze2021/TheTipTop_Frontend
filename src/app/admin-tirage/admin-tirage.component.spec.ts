import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTirageComponent } from './admin-tirage.component';

describe('AdminTirageComponent', () => {
  let component: AdminTirageComponent;
  let fixture: ComponentFixture<AdminTirageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTirageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTirageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
