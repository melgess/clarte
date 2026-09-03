import { Component } from '@angular/core';
import { UiButtonComponent } from '../ui-button/ui-button.component';

@Component({
  selector: 'app-final-cta-section',
  standalone: true,
  imports: [UiButtonComponent],
  templateUrl: './final-cta-section.component.html',
  styleUrl: './final-cta-section.component.scss'
})
export class FinalCtaSectionComponent {}
