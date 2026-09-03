import { TestBed } from '@angular/core/testing';
import { ProtocolSectionComponent } from './protocol-section.component';

describe('ProtocolSectionComponent', () => {
  it('should render the nine numbered treatment options', async () => {
    await TestBed.configureTestingModule({ imports: [ProtocolSectionComponent] }).compileComponents();
    const fixture = TestBed.createComponent(ProtocolSectionComponent);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;
    const options = element.querySelectorAll('app-protocol-list-item');

    expect(options.length).toBe(9);
    expect(options[0].textContent).toContain('Tratamento via medicação oral');
    expect(options[8].textContent).toContain('Tratamento interdisciplinar');
  });
});
