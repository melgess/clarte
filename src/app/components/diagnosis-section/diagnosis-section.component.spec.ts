import { TestBed } from '@angular/core/testing';
import { DiagnosisSectionComponent } from './diagnosis-section.component';

describe('DiagnosisSectionComponent', () => {
  it('should render four diagnosis items and the comparison image', async () => {
    await TestBed.configureTestingModule({ imports: [DiagnosisSectionComponent] }).compileComponents();
    const fixture = TestBed.createComponent(DiagnosisSectionComponent);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelectorAll('app-diagnosis-list-item').length).toBe(4);
    expect(element.querySelector('.diagnosis__visual img')?.getAttribute('src'))
      .toBe('/assets/segunda-sessao/img-principal.png');
    expect(element.querySelector('strong')?.textContent).toContain('Dra. Thais Junqueira');
  });
});
