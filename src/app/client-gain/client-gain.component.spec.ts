import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientGainComponent } from './client-gain.component';

describe('ClientGainComponent', () => {
  let component: ClientGainComponent;
  let fixture: ComponentFixture<ClientGainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientGainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientGainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
