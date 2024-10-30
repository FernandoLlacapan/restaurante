import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async register() {
    try {
      await this.authService.register(this.email, this.password);
      this.router.navigate(['/menu']); // Redirige al menú tras registrarse correctamente
    } catch (error) {
      console.error('Error al registrarse', error);
      alert('Error al registrarse. Inténtalo de nuevo.');
    }
  }
}
