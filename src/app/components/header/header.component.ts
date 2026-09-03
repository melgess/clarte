import { Component, signal } from '@angular/core';
import { UiButtonComponent } from '../ui-button/ui-button.component';

interface NavigationItem {
  readonly label: string;
  readonly href: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [UiButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  protected readonly isMenuOpen = signal(false);
  protected readonly navigationItems: readonly NavigationItem[] = [
    { label: 'O tratamento', href: '#tratamento' },
    { label: 'Sua causa', href: '#causa' },
    { label: 'Protocolo', href: '#protocolo' },
    { label: 'Dra. Thais', href: '#dra-thais' },
    { label: 'Dúvidas', href: '#duvidas' }
  ];

  protected toggleMenu(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
