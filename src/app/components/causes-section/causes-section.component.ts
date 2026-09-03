import { Component } from '@angular/core';
import { CauseCardComponent } from '../cause-card/cause-card.component';
import { UiButtonComponent } from '../ui-button/ui-button.component';

interface CauseCard {
  readonly title: string;
  readonly icon: string;
  readonly items: readonly string[];
}

@Component({
  selector: 'app-causes-section',
  standalone: true,
  imports: [CauseCardComponent, UiButtonComponent],
  templateUrl: './causes-section.component.html',
  styleUrl: './causes-section.component.scss'
})
export class CausesSectionComponent {
  protected readonly causes: readonly CauseCard[] = [
    {
      title: 'Mulheres & queda capilar pós-parto',
      icon: '/assets/terceira-sessao/icone-1.png',
      items: [
        'Queda intensa que começou depois do parto e não parece parar',
        'Medo de que a queda seja definitiva e não temporária',
        'Vontade de entender se é “normal” ou se precisa de tratamento'
      ]
    },
    {
      title: 'Alopecia androgenética (Calvície)',
      icon: '/assets/terceira-sessao/icone-2.png',
      items: [
        'Entradas cada vez mais marcadas ou coroa mais visível',
        'Raiz “abrindo”',
        'Calvície ficando mais visível e não saber o que fazer a tempo'
      ]
    },
    {
      title: 'Queda durante ou após emagrecimento',
      icon: '/assets/terceira-sessao/icone-3.png',
      items: [
        'Fio visivelmente mais fino e quebradiço',
        'Rabo de cavalo ou trança com metade do volume de antes',
        'Sensação de cabelo “cansado”, sem vida, mesmo com cuidados básicos em dia'
      ]
    }
  ];
}
