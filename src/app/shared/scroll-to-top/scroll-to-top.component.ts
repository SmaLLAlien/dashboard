import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollToTopComponent {
  isScrollToTopVisible: boolean = false;
  private minScrollPosition: number = 100;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const currentScrollPosition: number = window.pageYOffset;
    this.isScrollToTopVisible =  currentScrollPosition > this.minScrollPosition;
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
