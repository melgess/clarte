import { TestBed } from '@angular/core/testing';
import { AuthoritySectionComponent } from './authority-section.component';

describe('AuthoritySectionComponent', () => {
  it('should render the doctor information and image', async () => {
    await TestBed.configureTestingModule({ imports: [AuthoritySectionComponent] }).compileComponents();
    const fixture = TestBed.createComponent(AuthoritySectionComponent);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('#dra-thais')).toBeTruthy();
    expect(element.querySelector('h2')?.textContent).toContain('Dra. Thais Junqueira');
    expect(element.querySelector('img')?.getAttribute('src')).toBe('/assets/quinta-sessao/img-principal.png');
  });
});
