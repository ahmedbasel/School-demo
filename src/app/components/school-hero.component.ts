import { Component, inject } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'school-hero',
  standalone: true,
  template: `
    <section class="hero" id="home">
      <div class="hero-shape"></div>
      <div class="container hero-grid">
        <div class="hero-copy">
          <span class="eyebrow"><i></i> {{ lang.t('learningMakesDifference') }}</span>
          <h1>{{ lang.t('everyChild') }}<br>{{ lang.t('storyOf') }} <em>{{ lang.t('success') }}</em></h1>
          <p>{{ lang.t('heroIntro') }}</p>
          <div class="hero-actions">
            <a class="button" href="#about">{{ lang.t('discoverSchool') }} <span>←</span></a>
            <a class="play-link" href="#about"><span class="play">▶</span> {{ lang.t('schoolTour') }}</a>
          </div>
          <div class="hero-proof"><div class="avatar-stack"><span>👩🏻‍🏫</span><span>👨🏽‍🎓</span><span>👧🏻</span></div><div><b>{{ lang.t('inspiringCommunity') }}</b><small>{{ lang.t('learnDiscoverGrow') }}</small></div></div>
        </div>
        <div class="hero-visual"><div class="hero-photo"></div><div class="photo-sticker">✳<small>{{ lang.t('learnAndGrow') }}</small></div><div class="hero-note"><span class="note-icon">✦</span><div><b>{{ lang.t('careAndAttention') }}</b><small>{{ lang.t('familyPartnership') }}</small></div></div><span class="doodle doodle-one">✳</span><span class="doodle doodle-two">✦</span></div>
      </div>
      <div class="container hero-bottom"><span>{{ lang.t('smallBeginning') }}</span><span>{{ lang.t('welcomeSchool') }} <b>↓</b></span></div>
    </section>
  `,
})
export class SchoolHeroComponent {
  protected readonly lang = inject(LanguageService);
}
