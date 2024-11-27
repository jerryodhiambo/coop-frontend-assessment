import { Component, inject } from '@angular/core';
import { SharedModule } from '../../shared/modules/shared.module';
import { Router } from '@angular/router';
import { ProductsService } from '../../data/services/products.service';
import { Product } from '../../data/models/product.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  private router = inject(Router);

  walletBalance = 10000;
  products: Product[] = [];
  selectedProducts: any[] = [];
  totalDeduction = 0;

  private productsService = inject(ProductsService);

  addProduct(product: any) {
    this.selectedProducts.push(product);
    this.totalDeduction += product.deduction ?? 0;
    this.productsService.selectedProducts = this.selectedProducts;
  }

  deductAmount() {
    this.totalDeduction = 0;
    this.selectedProducts = [];
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProducts().subscribe((products) => {
      this.products = products.products.slice(0, 8).map((product: Product) => ({
        ...product,
        quantity: 1,
        total: product.price * 1,
      }));
    });
  }

  goBack() {
    this.router.navigate(['/home/dashboard']);
  }

  updateQuantity(product: Product, event: any) {
    const value = parseInt(event.target.value);
    product.quantity = isNaN(value) ? 1 : value;
    product.total = product.price * product.quantity;
    this.calculateTotal();
  }

  updateDeduction(product: Product, event: any) {
    const newDeduction = parseInt(event.target.value);
    if (newDeduction >= 0) {
      product.deduction = newDeduction;
      this.calculateTotal();
    }
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
    this.productsService.totalDeduction = this.totalDeduction;
  }

  navigateToSummary() {
    this.router.navigate(['/home/summary']);
  }
}
