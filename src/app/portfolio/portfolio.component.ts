import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  portfolio = [
    {
      "id": "u1",
      "name": "EasyTask",
      "text": "Uma plataforma de gerenciamento de tarefas que facilita a organização do trabalho com uma interface intuitiva.",
      "link": "https://gabrielhsimoes.github.io/01-starting-project/"
    },
    {
      "id": "u2",
      "name": "Investment",
      "text": "Uma ferramenta de cálculo de investimentos que ajuda a projetar retornos financeiros em simulações precisas.",
      "link": "https://gabrielhsimoes.github.io/calculator-investment/"
    }
]
}
