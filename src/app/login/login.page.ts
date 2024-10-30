import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async login() {
    try {
      await this.authService.login(this.email, this.password);
      this.router.navigate(['/menu']); // Redirige al menú tras iniciar sesión correctamente
    } catch (error) {
      console.error('Error al iniciar sesión', error);
      alert('Error al iniciar sesión. Verifica tus credenciales.');
    }
  }
}
