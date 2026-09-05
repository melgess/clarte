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
      answer: 'Não. O protocolo Clarté é um tratamento clínico (oral, tópico e/ou procedimentos como mesoterapia/mesojet) para fortalecer e recuperar a saúde do fio, não um implante cirúrgico.'
    },
    {
      question: 'Funciona para qualquer tipo de queda e afinamento ou calvície?',
      answer: 'A queda e a calvície têm causas específicas e, na maioria dos casos, resposta positiva ao tratamento correto, por isso a avaliação individual para um diagnóstico correto é o primeiro passo.'
    },
    {
      question: 'Funciona para queda pós-parto?',
      answer: 'A queda pós-parto tem causas específicas e, na maioria dos casos, resposta positiva ao tratamento correto, por isso a avaliação individual é o primeiro passo.'
    },
    {
      question: 'Em quanto tempo vejo resultado?',
      answer: 'Cada caso responde em um ritmo diferente, já que depende do diagnóstico. Isso é explicado com transparência já na primeira consulta.'
    },
    {
      question: 'Dói? Tem tempo de recuperação?',
      answer: 'Os procedimentos indicados (quando fazem parte do plano) são pouco invasivos, com desconforto mínimo e sem necessidade de afastamento das atividades.'
    },
    {
      question: 'Posso parcelar?',
      answer: 'Sim, com parcelamento sem juros, e o valor da consulta vira cashback aplicado no seu protocolo.'
    }
  ];
}
