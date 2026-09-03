import { Component } from '@angular/core';
import { UiButtonComponent } from '../ui-button/ui-button.component';

@Component({
  selector: 'app-authority-section',
  standalone: true,
  imports: [UiButtonComponent],
  templateUrl: './authority-section.component.html',
  styleUrl: './authority-section.component.scss'
})
export class AuthoritySectionComponent {}
