import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'cv-gabriel.pdf'; // Caminho para o arquivo
    link.download = 'cv-gabriel.pdf'; // Nome sugerido para o arquivo
    link.click();
  }
}
