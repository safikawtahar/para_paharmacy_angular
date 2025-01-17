import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = []; // Articles dans le panier

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems(); // Obtenir les articles
  }

  // Supprimer un article
  removeFromCart(productId: number): void {
    this.cartService.removeFromCart(productId);
    this.cartItems = this.cartService.getCartItems(); // Mettre à jour les articles
  }

  // Vider le panier
  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
  }
}
