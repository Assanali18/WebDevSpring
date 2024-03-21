<<<<<<< HEAD
import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';
import {SwiperOptions} from "swiper/types";

@Directive({
  selector: '[fmSwiper]',
})
export class SwiperDirective implements AfterViewInit {

  private readonly swiperElement: HTMLElement;

  @Input('config')
  config?: SwiperOptions;

  constructor(private el: ElementRef<HTMLElement>) {
    this.swiperElement = el.nativeElement;
  }

  ngAfterViewInit() {
    Object.assign(this.el.nativeElement, this.config);
    
    // @ts-ignore
    this.el.nativeElement.initialize();
  }
=======
import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';
import {SwiperOptions} from "swiper/types";

@Directive({
  selector: '[fmSwiper]',
})
export class SwiperDirective implements AfterViewInit {

  private readonly swiperElement: HTMLElement;

  @Input('config')
  config?: SwiperOptions;

  constructor(private el: ElementRef<HTMLElement>) {
    this.swiperElement = el.nativeElement;
  }

  ngAfterViewInit() {
    Object.assign(this.el.nativeElement, this.config);
    
    // @ts-ignore
    this.el.nativeElement.initialize();
  }
>>>>>>> 78668f55cf726fc0e7ee6bf74a94e0409fbd2f82
}