import {ChangeDetectionStrategy, Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollToTopComponent implements OnInit {
  isScrollToTopVisible: boolean = false;
  private minScrollPosition: number = 100;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollPosition: number = window.pageYOffset;
    this.isScrollToTopVisible =  currentScrollPosition > this.minScrollPosition;
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
