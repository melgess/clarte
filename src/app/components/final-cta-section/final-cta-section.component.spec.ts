import { TestBed } from '@angular/core/testing';
import { FinalCtaSectionComponent } from './final-cta-section.component';

describe('FinalCtaSectionComponent', () => {
  it('should render the scheduling call to action and availability notice', async () => {
    await TestBed.configureTestingModule({ imports: [FinalCtaSectionComponent] }).compileComponents();
    const fixture = TestBed.createComponent(FinalCtaSectionComponent);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('#agendamento')).toBeTruthy();
    expect(element.querySelector('h2 strong')?.textContent).toContain('com quem você confia');
    expect(element.querySelectorAll('.final-cta__notice img').length).toBe(2);
    expect(element.querySelector('.final-cta__notice')?.textContent).toContain('Vagas limitadas por semana');
  });
});
