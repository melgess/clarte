import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { TreatmentHeroComponent } from './components/treatment-hero/treatment-hero.component';
import { DiagnosisSectionComponent } from './components/diagnosis-section/diagnosis-section.component';
import { CausesSectionComponent } from './components/causes-section/causes-section.component';
import { ProtocolSectionComponent } from './components/protocol-section/protocol-section.component';
import { AuthoritySectionComponent } from './components/authority-section/authority-section.component';
import { BenefitsSectionComponent } from './components/benefits-section/benefits-section.component';
import { SocialProofSectionComponent } from './components/social-proof-section/social-proof-section.component';
import { FaqSectionComponent } from './components/faq-section/faq-section.component';
import { FinalCtaSectionComponent } from './components/final-cta-section/final-cta-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactModalComponent } from './components/contact-modal/contact-modal.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    TreatmentHeroComponent,
    DiagnosisSectionComponent,
    CausesSectionComponent,
    ProtocolSectionComponent,
    AuthoritySectionComponent,
    BenefitsSectionComponent,
    SocialProofSectionComponent,
    FaqSectionComponent,
    FinalCtaSectionComponent,
    FooterComponent,
    ContactModalComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
