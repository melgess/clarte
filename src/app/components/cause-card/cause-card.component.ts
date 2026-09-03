import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cause-card',
  standalone: true,
  templateUrl: './cause-card.component.html',
  styleUrl: './cause-card.component.scss'
})
export class CauseCardComponent {
  @Input({ required: true }) title = '';
  @Input({ required: true }) icon = '';
  @Input({ required: true }) items: readonly string[] = [];
}
