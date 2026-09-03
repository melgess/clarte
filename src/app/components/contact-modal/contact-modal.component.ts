import { Component, ElementRef, HostListener, ViewChild, effect, signal } from '@angular/core';
import { ContactModalService } from '../../services/contact-modal.service';

@Component({
  selector: 'app-contact-modal',
  standalone: true,
  templateUrl: './contact-modal.component.html',
  styleUrl: './contact-modal.component.scss'
})
export class ContactModalComponent {
  @ViewChild('nameInput') private nameInput?: ElementRef<HTMLInputElement>;

  protected readonly submitted = signal(false);

  constructor(protected readonly modal: ContactModalService) {
    effect(() => {
      if (this.modal.isOpen()) {
        setTimeout(() => this.nameInput?.nativeElement.focus());
      }
    });
  }

  @HostListener('document:keydown.escape')
  protected handleEscape(): void {
    if (this.modal.isOpen()) {
      this.close();
    }
  }

  protected close(): void {
    this.submitted.set(false);
    this.modal.close();
  }

  protected closeFromBackdrop(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }

  protected submit(event: Event): void {
    event.preventDefault();
    this.submitted.set(true);
  }
}
