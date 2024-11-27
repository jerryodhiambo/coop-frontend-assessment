import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulPaymentModalComponent } from './successful-payment-modal.component';

describe('SuccessfulPaymentModalComponent', () => {
  let component: SuccessfulPaymentModalComponent;
  let fixture: ComponentFixture<SuccessfulPaymentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessfulPaymentModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessfulPaymentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
