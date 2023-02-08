import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMagasinComponent } from './admin-magasin.component';

describe('AdminMagasinComponent', () => {
  let component: AdminMagasinComponent;
  let fixture: ComponentFixture<AdminMagasinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMagasinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMagasinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
