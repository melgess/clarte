import { TestBed } from '@angular/core/testing';
import { TreatmentHeroComponent } from './treatment-hero.component';

describe('TreatmentHeroComponent', () => {
  it('should render the treatment content and image', async () => {
    await TestBed.configureTestingModule({ imports: [TreatmentHeroComponent] }).compileComponents();
    const fixture = TestBed.createComponent(TreatmentHeroComponent);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('#tratamento')).toBeTruthy();
    expect(element.querySelector('h1')?.textContent).toContain('tratamento capilar');
    expect(element.querySelector('img')?.getAttribute('src')).toBe('/assets/primeira-sessao/img-principal.png');
  });
});
