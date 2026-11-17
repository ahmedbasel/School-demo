import { Component, inject } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'school-footer',
  standalone: true,
  template: `
    <section class="contact-cta" id="contact"><div class="container cta-inner"><div><span class="eyebrow"><i></i> {{ lang.t('startTogether') }}</span><h2>{{ lang.t('nextStep') }}</h2><p>{{ lang.t('contactIntro') }}</p></div><a class="button button-light" href="mailto:info@school.edu.eg">{{ lang.t('contactSchool') }} <span>↖</span></a><span class="cta-spark">✳</span></div></section>
    <footer class="footer"><div class="container footer-main"><div class="footer-brand"><a class="brand brand-footer" href="#home"><img class="brand-logo" src="/salam-logo.jpeg" alt="{{ lang.t('schoolName') }}"><span><b>{{ lang.t('schoolName') }}</b><small>{{ lang.t('schoolMotto') }}</small></span></a><p>{{ lang.t('footerIntro') }}</p><a class="social" href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">f</a><a class="social" href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">◎</a></div><div><h3>{{ lang.t('quickLinks') }}</h3><a href="#about">{{ lang.t('about') }}</a><a href="#programs">{{ lang.t('stages') }}</a><a href="#activities">{{ lang.t('activities') }}</a><a href="#news">{{ lang.t('news') }}</a></div><div><h3>{{ lang.t('contactDetails') }}</h3><a href="tel:+201000000000">☎ 0100 000 0000</a><a href="mailto:info@school.edu.eg">✉ info&#64;school.edu.eg</a><span>⌖ {{ lang.t('address') }}</span></div><div class="footer-hours"><h3>{{ lang.t('welcomeVisitors') }}</h3><p>{{ lang.t('workingHours') }}<br>{{ lang.t('morningHours') }}</p><a class="text-link" href="mailto:info@school.edu.eg">{{ lang.t('contactUs') }} <span>←</span></a></div></div><div class="container footer-bottom"><span>© ٢٠٢٦ {{ lang.t('schoolName') }}. {{ lang.t('rights') }}</span><span>{{ lang.t('madeWithCare') }} ✳</span></div></footer>
  `,
})
export class SchoolFooterComponent {
  protected readonly lang = inject(LanguageService);
}
