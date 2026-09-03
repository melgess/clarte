import { Component } from '@angular/core';
import { ProtocolListItemComponent } from '../protocol-list-item/protocol-list-item.component';
import { UiButtonComponent } from '../ui-button/ui-button.component';

@Component({
  selector: 'app-protocol-section',
  standalone: true,
  imports: [ProtocolListItemComponent, UiButtonComponent],
  templateUrl: './protocol-section.component.html',
  styleUrl: './protocol-section.component.scss'
})
export class ProtocolSectionComponent {
  protected readonly treatments: readonly string[] = [
    'Tratamento via medicação oral (quando indicado pelo diagnóstico)',
    'Tratamento tópico de uso diário',
    'Terapia capilar em consultório',
    'Capacete de LED',
    'Mesoterapia capilar / mesojet',
    'Microagulhamento',
    'Laser capilar',
    'Combinações de Drug Delivery',
    'Tratamento interdisciplinar quando indicado'
  ];
}
