import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importer le service Router

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {} // Injecter le service Router

  navigateToLogin() {
    this.router.navigate(['/login']); // Méthode pour rediriger
  }
}
