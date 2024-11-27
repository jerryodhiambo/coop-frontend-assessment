import { Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { interval, Subscription, take } from 'rxjs';
import { SharedModule } from '../../../../shared/modules/shared.module';
import { Router, RouterModule } from '@angular/router';
import { Product } from '../../../../data/models/product.model';
import { ProductsService } from '../../../../data/services/products.service';
import { ModalsService } from '../../../../data/services/modal.service';

@Component({
  selector: 'app-product-summary',
  standalone: true,
  imports: [SharedModule, RouterModule],
  templateUrl: './product-summary.component.html',
  styleUrl: './product-summary.component.scss',
})
export class ProductSummaryComponent {
  private productsService = inject(ProductsService);
  selectedProducts = this.productsService.selectedProducts;
  private modalsService = inject(ModalsService);

  otpControls: FormControl[] = Array(6)
    .fill(null)
    .map(() => new FormControl(''));
  seconds = 30;
  countdownSub?: Subscription;
  totalDeduction = this.productsService.totalDeduction;
  private router = inject(Router);

  constructor() {}

  ngOnInit() {
    this.startCountdown();
  }

  ngOnDestroy() {
    if (this.countdownSub) {
      this.countdownSub.unsubscribe();
    }
  }

  startCountdown() {
    this.countdownSub = interval(1000)
      .pipe(take(30))
      .subscribe(() => {
        this.seconds--;
        if (this.seconds === 0) {
          // Handle countdown completion
        }
      });
  }

  onOtpInput(event: any, index: number) {
    const input = event.target as HTMLInputElement;
    if (input.value && index < 5) {
      const nextInput = document.querySelector(
        `input[formControlName="${index + 1}"]`
      ) as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
      }
    }
  }

  isOtpComplete(): boolean {
    return this.otpControls.every((control) => control.value);
  }

  removeProduct(product: Product) {
    const index = this.selectedProducts.indexOf(product);
    if (index > -1) {
      this.selectedProducts.splice(index, 1);
      this.calculateTotal();
    }
  }

  private calculateTotal() {
    this.totalDeduction = this.selectedProducts.reduce(
      (sum, product) => sum + (product.deduction ?? 0),
      0
    );
  }
  goBack() {
    this.router.navigate(['/home/dashabord']);
  }

  pay() {
    this.modalsService.successfulPaymentModal({
      entity: 'successfulPayment',
      data: {
        refNumber: '1234567890',
        amount: this.totalDeduction,
        customerName: `${
          JSON.parse(localStorage.getItem('authUser') || '{}')?.firstName ?? ''
        } ${
          JSON.parse(localStorage.getItem('authUser') || '{}')?.lastName ?? ''
        }`,
      },
    });
  }
}
