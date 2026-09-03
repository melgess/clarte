import { TestBed } from '@angular/core/testing';
import { FaqSectionComponent } from './faq-section.component';

describe('FaqSectionComponent', () => {
  it('should render six accessible FAQ items', async () => {
    await TestBed.configureTestingModule({ imports: [FaqSectionComponent] }).compileComponents();
    const fixture = TestBed.createComponent(FaqSectionComponent);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelectorAll('details').length).toBe(6);
    expect(element.querySelector('summary')?.textContent).toContain('É implante de cabelo?');
    expect(element.querySelector('.faq-item__answer')?.textContent).toBeTruthy();
  });
});
