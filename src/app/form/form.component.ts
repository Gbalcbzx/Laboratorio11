import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  name?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  address?: string;
  birthDate?: string;

  onSubmit() {
    // Implementa la lógica para procesar el registro de clientes aquí
    console.log('Nombre:', this.name);
    console.log('Apellido:', this.lastName);
    console.log('Correo Electrónico:', this.email);
    console.log('Teléfono:', this.phone);
    console.log('Dirección:', this.address);
    console.log('Fecha de Nacimiento:', this.birthDate);
  }
}

