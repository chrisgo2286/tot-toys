import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartService } from './cart.service';
import { CartItem } from './cart-item';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tot-toys';
  cartService = inject(CartService);
  cartQuantity = 0;
  cartList: CartItem[] = [];

  navToToyOverview(): void {
    const searchInput = <HTMLInputElement>document.getElementById("search");
    const searchText = (searchInput) ? searchInput.value: null; 
    const url = this.router.url;
    
    if(url.includes('toyOverview')) {
      this.router.navigate(
        ['/']
      ) .then(() => {
        this.router.navigate(
          ['/', 'toyOverview'],
          { queryParams: { search: searchText }}
        )
      })
    } else {
      this.router.navigate(
        ['/', 'toyOverview'],
        { queryParams: { search: searchText }}
      )
    }
  }

  getCart() {
    this.cartService.fetchCart()
    .then((cartList: CartItem[]) => {
      this.cartList = cartList;
    }).then(() => this.cartQuantity = this.countCartQuantity());
  }

  countCartQuantity() {
    let sum = 0;
    for(let i=0;i < this.cartList.length; i++) {
      sum = sum + this.cartList[i].quantity;
    }
    return sum;
  }

  constructor ( private router: Router ) {
    this.getCart()
  }

}
