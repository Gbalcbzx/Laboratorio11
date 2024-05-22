import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email?: string;
  password?: string;

  constructor(private router: Router) {}

  onLogin() {
    // Implementa la lógica de autenticación aquí
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    this.router.navigate(['/form'])
  }

  onRegister() {
    // Redirige a la página de registro
    this.router.navigate(['/register']);
  }
}
