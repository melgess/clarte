import { TestBed } from '@angular/core/testing';
import { CausesSectionComponent } from './causes-section.component';

describe('CausesSectionComponent', () => {
  it('should render three cause cards and the final guidance card', async () => {
    await TestBed.configureTestingModule({ imports: [CausesSectionComponent] }).compileComponents();
    const fixture = TestBed.createComponent(CausesSectionComponent);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelectorAll('app-cause-card').length).toBe(3);
    expect(element.querySelector('.truth-card')).toBeTruthy();
    expect(element.querySelector('.truth-card__visual iframe')).toBeTruthy();
    expect(element.querySelector('.truth-card__visual iframe')?.getAttribute('src'))
      .toBe('https://www.youtube.com/embed/-RYZOyCT2HY');
  });
});
