import { TestBed } from '@angular/core/testing';
import { SocialProofSectionComponent } from './social-proof-section.component';

describe('SocialProofSectionComponent', () => {
  it('should render four result images and the centered logo', async () => {
    await TestBed.configureTestingModule({ imports: [SocialProofSectionComponent] }).compileComponents();
    const fixture = TestBed.createComponent(SocialProofSectionComponent);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelectorAll('.social-proof__image').length).toBe(4);
    expect(element.querySelector('.social-proof__logo')?.getAttribute('src'))
      .toBe('/assets/setima-sessao/logo.png');
    expect(element.querySelector('.social-proof__disclaimer')?.textContent).toContain('Resultados podem variar');
  });
});
