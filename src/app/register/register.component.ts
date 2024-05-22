import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  name?: string;
  email?: string;
  password?: string;

  constructor(private router: Router) {} // Inyecta el servicio Router en el constructor

  onRegister() {
    // Implementa la lógica de registro aquí
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Password:', this.password);

    // Redirige a la página "form"
    this.router.navigate(['/form']);
  }
}
