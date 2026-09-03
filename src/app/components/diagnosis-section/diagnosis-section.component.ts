import { Component } from '@angular/core';
import { DiagnosisListItemComponent } from '../diagnosis-list-item/diagnosis-list-item.component';
import { UiButtonComponent } from '../ui-button/ui-button.component';

@Component({
  selector: 'app-diagnosis-section',
  standalone: true,
  imports: [DiagnosisListItemComponent, UiButtonComponent],
  templateUrl: './diagnosis-section.component.html',
  styleUrl: './diagnosis-section.component.scss'
})
export class DiagnosisSectionComponent {}
