import { AfterViewInit, Directive, Inject, NgZone, OnDestroy, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appAutoReveal]',
  standalone: true
})
export class AutoRevealDirective implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;
  private isBrowser: boolean;

  constructor(
    private zone: NgZone,
    @Inject(PLATFORM_ID) platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit() {
    // ✅ SSR: server-side lo skip
    if (!this.isBrowser) return;

    // ✅ Browser fallback
    if (typeof document === 'undefined') return;

    this.zone.runOutsideAngular(() => {
      const targets = Array.from(
        document.querySelectorAll(
          'section, .skill-card, .project-card, .experience-card, .info-card, .social-card, footer, .footer'
        )
      ) as HTMLElement[];

      targets.forEach((el) => el.classList.add('reveal'));

      // ✅ if IO not available, show everything
      if (typeof IntersectionObserver === 'undefined') {
        targets.forEach((el) => el.classList.add('reveal-show'));
        return;
      }

      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const el = entry.target as HTMLElement;
            if (entry.isIntersecting) {
              el.classList.add('reveal-show');
              this.observer?.unobserve(el);
            }
          });
        },
        { threshold: 0.12 }
      );

      targets.forEach((el) => this.observer?.observe(el));
    });
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
