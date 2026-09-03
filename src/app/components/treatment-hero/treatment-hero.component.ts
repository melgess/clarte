import { Component } from '@angular/core';
import { UiButtonComponent } from '../ui-button/ui-button.component';

@Component({
  selector: 'app-treatment-hero',
  standalone: true,
  imports: [UiButtonComponent],
  templateUrl: './treatment-hero.component.html',
  styleUrl: './treatment-hero.component.scss'
})
export class TreatmentHeroComponent {}
