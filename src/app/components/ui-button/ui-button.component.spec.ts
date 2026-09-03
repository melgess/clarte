import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ContactModalService } from '../../services/contact-modal.service';
import { UiButtonComponent } from './ui-button.component';

@Component({
  standalone: true,
  imports: [UiButtonComponent],
  template: '<app-ui-button>QUERO AGENDAR CONSULTA</app-ui-button>'
})
class TestHostComponent {}

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

  it('should render its projected label', async () => {
    await TestBed.configureTestingModule({ imports: [TestHostComponent] }).compileComponents();
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();

    expect((fixture.nativeElement.querySelector('button') as HTMLButtonElement).textContent)
      .toContain('QUERO AGENDAR CONSULTA');
  });
});
