import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-faq-item',
  standalone: true,
  templateUrl: './faq-item.component.html',
  styleUrl: './faq-item.component.scss'
})
export class FaqItemComponent {
  @Input({ required: true }) question = '';
  @Input({ required: true }) answer = '';
}
