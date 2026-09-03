import { TestBed } from '@angular/core/testing';
import { BenefitsSectionComponent } from './benefits-section.component';

describe('BenefitsSectionComponent', () => {
  it('should render the four treatment benefits', async () => {
    await TestBed.configureTestingModule({ imports: [BenefitsSectionComponent] }).compileComponents();
    const fixture = TestBed.createComponent(BenefitsSectionComponent);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelectorAll('app-benefit-card').length).toBe(4);
    expect(element.textContent).toContain('Cashback da consulta');
  });
});
