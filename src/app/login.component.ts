import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="login-page">
      <!-- Aquí irá el componente con los campos y botones -->
    </div>
  `,
  styles: [
    `
      .login-page { max-width: 900px; margin: 6vh auto; padding: 24px; font-family: Arial, Helvetica, sans-serif; text-align: center; }
      h1 { color: #333; }
    `
  ]
})
export class LoginComponent {}
