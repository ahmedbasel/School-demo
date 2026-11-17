import { Component, inject } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'school-header',
  standalone: true,
  template: `
    <div class="topline">
      <div class="container topline-inner">
        <span>✦ {{ lang.t('topTagline') }}</span>
        <div class="topline-actions">
          <a href="tel:+201000000000">☎ {{ lang.t('call') }}: 0100 000 0000</a>
          <button class="desktop-language" type="button" (click)="lang.toggle()">◎ {{ lang.locale() === 'ar' ? 'EN' : 'عربي' }}</button>
        </div>
      </div>
    </div>
    <header class="site-header">
      <div class="container nav-wrap">
        <a class="brand" href="#home" aria-label="{{ lang.t('schoolName') }}">
          <img class="brand-logo" src="/salam-logo.jpeg" alt="{{ lang.t('schoolName') }}">
          <span><b>{{ lang.t('schoolName') }}</b><small>{{ lang.t('schoolMotto') }}</small></span>
        </a>
        <nav class="desktop-nav" aria-label="{{ lang.t('mainMenu') }}">
          <a href="#home">{{ lang.t('home') }}</a>
          <a href="#about">{{ lang.t('about') }}</a>
          <a href="#programs">{{ lang.t('stages') }}</a>
          <a href="#activities">{{ lang.t('activities') }}</a>
          <a href="#news">{{ lang.t('news') }}</a>
        </nav>
        <a class="button button-small nav-contact" href="#contact">{{ lang.t('contactUs') }} <span>↖</span></a>
        <button class="menu-toggle" type="button" [attr.aria-expanded]="menuOpen" [attr.aria-label]="menuOpen ? lang.t('closeMenu') : lang.t('openMenu')" (click)="menuOpen = !menuOpen">{{ menuOpen ? '×' : '☰' }}</button>
      </div>
      @if (menuOpen) {
        <div class="mobile-drawer" dir="{{ lang.locale() === 'ar' ? 'rtl' : 'ltr' }}">
          <div class="drawer-top">
            <button class="drawer-close" type="button" [attr.aria-label]="lang.t('closeMenu')" (click)="menuOpen = false">×</button>
            <a class="drawer-brand" href="#home" (click)="menuOpen = false">
              <span><b>{{ lang.t('schoolName') }}</b><small>{{ lang.t('schoolMotto') }}</small></span>
              <img src="/salam-logo.jpeg" alt="">
            </a>
          </div>
          <div class="drawer-label">{{ lang.t('mainMenu') }}</div>
          <nav class="drawer-links" [attr.aria-label]="lang.t('mainMenu')">
            <a class="drawer-active" href="#home" (click)="menuOpen = false">{{ lang.t('home') }}</a>
            <a href="#about" (click)="menuOpen = false">{{ lang.t('about') }}</a>
            <a href="#programs" (click)="menuOpen = false">{{ lang.t('stages') }}</a>
            <a href="#activities" (click)="menuOpen = false">{{ lang.t('activities') }}</a>
            <a href="#news" (click)="menuOpen = false">{{ lang.t('news') }}</a>
          </nav>
          <a class="button drawer-contact" href="#contact" (click)="menuOpen = false">{{ lang.t('contactUs') }} <span>↖</span></a>
          <div class="drawer-language">
            <button class="language-switch" type="button" (click)="lang.toggle()">{{ lang.locale() === 'ar' ? 'EN' : 'عربي' }}</button>
            <button class="language-label" type="button" (click)="lang.toggle()"><span>◎</span>{{ lang.t(lang.locale() === 'ar' ? 'switchToEnglish' : 'switchToArabic') }}</button>
          </div>
        </div>
      }
    </header>
  `,
})
export class SchoolHeaderComponent {
  protected readonly lang = inject(LanguageService);
  menuOpen = false;
}
