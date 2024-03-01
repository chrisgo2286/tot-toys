import { Injectable } from '@angular/core';
import { CartItem } from './cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  urlA = 'http://localhost:8000/tot-toys/cart/';
  urlB = 'http://localhost:8000/tot-toys/cartItems/';
  urlC = 'http://localhost:8000/tot-toys/cart/create/';


  async fetchCart(): Promise<CartItem[]> {
    const data = await fetch(this.urlA);
    return await data.json() ?? [];
  }
  
  async patchCartItem(id: number, quantity: number | undefined) {
    await fetch(this.urlB + id + '/', {
      method: 'PATCH',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: id,
        quantity: quantity
      })
    })
  }

  deleteCartItem(id: number) {
    return fetch(this.urlB + id + '/', {
      method: 'DELETE',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: id
      })
    })
  }

  postCartItem(toyId: number) {
    return fetch(this.urlC, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        toy: toyId,
        user: 1
      })
    })
  }
}
