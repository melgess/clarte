import { TestBed } from '@angular/core/testing';
import { ContactModalService } from '../../services/contact-modal.service';
import { UiButtonComponent } from './ui-button.component';

describe('UiButtonComponent', () => {
  it('should open the shared contact modal', async () => {
    await TestBed.configureTestingModule({ imports: [UiButtonComponent] }).compileComponents();
    const fixture = TestBed.createComponent(UiButtonComponent);
    const service = TestBed.inject(ContactModalService);
    fixture.detectChanges();

    (fixture.nativeElement.querySelector('button') as HTMLButtonElement).click();

    expect(service.isOpen()).toBeTrue();
    service.close();
  });
});
