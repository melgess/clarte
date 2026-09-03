import { TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  it('should render the brand assets and external Instagram link', async () => {
    await TestBed.configureTestingModule({ imports: [FooterComponent] }).compileComponents();
    const fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;
    const instagram = element.querySelector('.footer__instagram') as HTMLAnchorElement;

    expect(element.querySelector('.footer__brand img')?.getAttribute('src')).toBe('/assets/rodape/logo.png');
    expect(instagram.href).toContain('instagram.com/drathaisjunqueira');
    expect(instagram.getAttribute('rel')).toContain('noopener');
  });
});
