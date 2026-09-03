import { Component } from '@angular/core';
import { FaqItemComponent } from '../faq-item/faq-item.component';

interface Faq {
  readonly question: string;
  readonly answer: string;
}

@Component({
  selector: 'app-faq-section',
  standalone: true,
  imports: [FaqItemComponent],
  templateUrl: './faq-section.component.html',
  styleUrl: './faq-section.component.scss'
})
export class FaqSectionComponent {
  protected readonly faqs: readonly Faq[] = [
    {
      question: 'É implante de cabelo?',
      answer: 'Não. O tratamento da Clarté utiliza protocolos clínicos personalizados para cuidar da saúde do couro cabeludo e dos fios, sem cirurgia ou implantação capilar.'
    },
    {
      question: 'Funciona para qualquer tipo de queda e afinamento ou calvície?',
      answer: 'O protocolo depende da causa e do estágio da queda. Após a avaliação dermatológica, a médica identifica as opções adequadas e explica quais resultados são possíveis para o seu caso.'
    },
    {
      question: 'Funciona para queda pós-parto?',
      answer: 'A queda pós-parto pode ser temporária, mas deve ser avaliada quando intensa ou persistente. A consulta ajuda a diferenciar alterações esperadas de condições que precisam de acompanhamento.'
    },
    {
      question: 'Em quanto tempo vejo resultado?',
      answer: 'O prazo varia conforme diagnóstico, resposta individual e regularidade do tratamento. Como o cabelo segue ciclos naturais de crescimento, a evolução costuma ser acompanhada ao longo de alguns meses.'
    },
    {
      question: 'Dói? Tem tempo de recuperação?',
      answer: 'Isso depende das técnicas indicadas. Muitos procedimentos causam apenas desconforto leve e permitem retomar a rotina rapidamente; todos os cuidados são explicados antes de cada etapa.'
    },
    {
      question: 'Posso parcelar?',
      answer: 'As condições de pagamento e parcelamento são apresentadas pela equipe da clínica de acordo com o protocolo indicado após a consulta.'
    }
  ];
}
