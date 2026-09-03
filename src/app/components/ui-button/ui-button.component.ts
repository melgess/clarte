import { Component, Input, inject } from '@angular/core';
import { ContactModalService } from '../../services/contact-modal.service';

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
  private readonly contactModal = inject(ContactModalService);

  @Input() href = '#';
  @Input() width = '249px';
  @Input() height = '52px';
  @Input() ariaLabel: string | null = null;
  @Input() opensModal = true;

  protected openModal(): void {
    this.contactModal.open();
  }
}
