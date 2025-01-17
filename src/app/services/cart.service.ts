import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartKey = 'cartItems'; // Clé pour localStorage

  constructor() {}

  // Ajouter un produit au panier
  addToCart(product: any): void {
    const currentCart = this.getCartItems(); // Récupérer les articles actuels
    currentCart.push(product); // Ajouter le nouveau produit
    this.saveCart(currentCart); // Sauvegarder dans localStorage
    console.log('Produit ajouté au panier:', product);
  }

  // Obtenir tous les produits dans le panier
  getCartItems(): any[] {
    const cart = localStorage.getItem(this.cartKey); // Récupérer le panier depuis localStorage
    return cart ? JSON.parse(cart) : []; // Si le panier est vide, retourner un tableau vide
  }

  // Supprimer un produit du panier
  removeFromCart(productId: number): void {
    const currentCart = this.getCartItems();
    const updatedCart = currentCart.filter(item => item.id !== productId); // Supprimer l'article
    this.saveCart(updatedCart); // Sauvegarder le panier mis à jour
  }

  // Vider le panier
  clearCart(): void {
    localStorage.removeItem(this.cartKey); // Supprimer le panier de localStorage
  }

  // Sauvegarder le panier dans localStorage
  private saveCart(cart: any[]): void {
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }
}
