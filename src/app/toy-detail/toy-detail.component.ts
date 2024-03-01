import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ToyListService } from '../toy-list.service';
import { CartService } from '../cart.service';
import { Toy } from '../toy';

@Component({
  selector: 'app-toy-detail',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './toy-detail.component.html',
  styleUrl: './toy-detail.component.css'
})
export class ToyDetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  toyListService = inject(ToyListService);
  cartService = inject(CartService);
  toyId = -1;
  toy: Toy | undefined;

  addToCart(toyId: number) {
    this.cartService.postCartItem(toyId);
    const modal = document.getElementById("modal");
    if(modal) {
      modal.style.display = "block";
    }
  }

  exitModal() {
    const modal = document.getElementById("modal");
    if(modal) {
      modal.style.display = "none";
    }
  }

  constructor() {
    this.toyId = Number(this.route.snapshot.params['id']);
    this.toyListService.fetchToyById(this.toyId)
    .then((toy) => {
      this.toy = toy;
    });
  }
}
