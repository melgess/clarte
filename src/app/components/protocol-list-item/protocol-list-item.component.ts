import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-protocol-list-item',
  standalone: true,
  templateUrl: './protocol-list-item.component.html',
  styleUrl: './protocol-list-item.component.scss'
})
export class ProtocolListItemComponent {
  @Input({ required: true }) number = 1;
  @Input({ required: true }) label = '';
}
