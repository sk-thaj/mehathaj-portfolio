import { Directive, ElementRef, AfterViewInit, OnDestroy, Input, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  @Input() revealDelay: number = 0;
  @Input() revealOnce: boolean = true;
  @Input() revealThreshold: number = 0.15;

  private observer?: IntersectionObserver;
  private isBrowser: boolean;

  constructor(
    private el: ElementRef<HTMLElement>,
    @Inject(PLATFORM_ID) platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit() {
    const node = this.el.nativeElement;

    node.classList.add('reveal');
    node.style.setProperty('--reveal-delay', `${this.revealDelay}ms`);

    // ✅ SSR safe: server side lo direct show
    if (!this.isBrowser) {
      node.classList.add('reveal-show');
      return;
    }

    // ✅ Browser fallback (older env)
    if (typeof IntersectionObserver === 'undefined') {
      node.classList.add('reveal-show');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.add('reveal-show');
            if (this.revealOnce) this.observer?.unobserve(node);
          } else if (!this.revealOnce) {
            node.classList.remove('reveal-show');
          }
        });
      },
      { threshold: this.revealThreshold }
    );

    this.observer.observe(node);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
