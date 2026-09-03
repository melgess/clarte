import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-button',
  standalone: true,
  templateUrl: './ui-button.component.html',
  styleUrl: './ui-button.component.scss',
  host: {
    '[style.--button-width]': 'width',
    '[style.--button-height]': 'height'
  }
})
export class UiButtonComponent {
  @Input() href = '#';
  @Input() width = '249px';
  @Input() height = '52px';
  @Input() ariaLabel: string | null = null;
}
