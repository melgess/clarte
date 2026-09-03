import { TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  it('should render every section anchor', async () => {
    await TestBed.configureTestingModule({ imports: [HeaderComponent] }).compileComponents();
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const links = fixture.nativeElement.querySelectorAll('.header__links a');

    expect(links.length).toBe(5);
    expect(links[0].getAttribute('href')).toBe('#tratamento');
  });

  it('should toggle the mobile navigation', async () => {
    await TestBed.configureTestingModule({ imports: [HeaderComponent] }).compileComponents();
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const toggle = fixture.nativeElement.querySelector('.header__menu-toggle') as HTMLButtonElement;

    toggle.click();
    fixture.detectChanges();

    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    expect(fixture.nativeElement.querySelector('.header__navigation--open')).toBeTruthy();
  });
});
