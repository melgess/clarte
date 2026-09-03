import { Component } from '@angular/core';
import { BenefitCardComponent } from '../benefit-card/benefit-card.component';

interface Benefit {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}

@Component({
  selector: 'app-benefits-section',
  standalone: true,
  imports: [BenefitCardComponent],
  templateUrl: './benefits-section.component.html',
  styleUrl: './benefits-section.component.scss'
})
export class BenefitsSectionComponent {
  protected readonly benefits: readonly Benefit[] = [
    {
      icon: '/assets/sexta-sessao/icone-1.png',
      title: 'Atendimento rápido e humanizado',
      description: 'Escuta próxima em cada etapa do seu tratamento.'
    },
    {
      icon: '/assets/sexta-sessao/icone-2.png',
      title: 'Diagnóstico e protocolo 100% personalizados',
      description: 'Ao seu caso — nunca genérico, nunca de prateleira.'
    },
    {
      icon: '/assets/sexta-sessao/icone-3.png',
      title: 'Acompanhamento ágil',
      description: 'Com ajustes ao longo do tratamento, sempre que necessário.'
    },
    {
      icon: '/assets/sexta-sessao/icone-4.png',
      title: 'Cashback da consulta',
      description: 'O valor da consulta é aplicado de volta no seu protocolo.'
    }
  ];
}
