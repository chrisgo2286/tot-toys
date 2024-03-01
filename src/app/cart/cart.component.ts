import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../cart.service';
import { CartItem } from '../cart-item';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ CommonModule, RouterLink ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartList: CartItem[] = [];
  cartService: CartService = inject(CartService);

  subtotalCart(): string {
    let subtotal = 0;
    for(let i=0; i<this.cartList.length; i++) {
      subtotal = subtotal + this.cartList[i].total;
    }
    return subtotal.toFixed(2);
  }

  increaseQuantity(id: number) {
    let quantity = this.getQuantity(id);
    (quantity !== undefined) ? quantity++: null;
    this.cartService.patchCartItem(id, quantity)
    .then(() => this.getCart()); 
  }

  decreaseQuantity(id: number) {
    let quantity = this.getQuantity(id);
    (quantity === 1) ? this.deleteCartItem(id): null;
    
    if(quantity && quantity > 1) {
      quantity--;
      this.cartService.patchCartItem(id, quantity)
      .then(() => this.getCart())
    }
  }
  
  deleteCartItem(id: number) {
    this.cartService.deleteCartItem(id)
    .then(() => this.getCart());
  }

  getQuantity(id: number): number | undefined {
    for(let i=0; i < this.cartList.length; i++) {
      if(this.cartList[i].id === id) {
        return this.cartList[i].quantity;
      }
    }
    return undefined
  }

  getCart() {
    this.cartService.fetchCart()
    .then((cartList: CartItem[]) => {
      this.cartList = cartList;
    })
  }

  constructor() {
    this.getCart(); 
  }
}
