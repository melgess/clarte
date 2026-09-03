import { TestBed } from '@angular/core/testing';
import { ContactModalService } from '../../services/contact-modal.service';
import { ContactModalComponent } from './contact-modal.component';

describe('ContactModalComponent', () => {
  it('should show three required fields when opened and close with its button', async () => {
    await TestBed.configureTestingModule({ imports: [ContactModalComponent] }).compileComponents();
    const fixture = TestBed.createComponent(ContactModalComponent);
    const service = TestBed.inject(ContactModalService);

    service.open();
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelectorAll('input[required]').length).toBe(3);
    expect(element.querySelector('[role="dialog"]')).toBeTruthy();

    (element.querySelector('.contact-modal__close') as HTMLButtonElement).click();
    fixture.detectChanges();
    expect(element.querySelector('[role="dialog"]')).toBeNull();
  });
});
