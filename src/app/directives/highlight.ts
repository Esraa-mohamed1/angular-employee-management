// Highlight Directive - Custom Directive بيغير لون الخلفية لما الماوس يعدي على العنصر
// الـ Directive بتضيف سلوك لعناصر HTML موجودة

import {
  Directive,
  ElementRef,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
  // selector بين [] يعني Attribute Directive
  // هيتطبق على أي عنصر عليه appHighlight
  // مثال: <p appHighlight>Ahmed</p>
})
export class Highlight {

  // ElementRef بيديني وصول للعنصر الأصلي في الـ DOM
  constructor(private element: ElementRef) {}

  // @HostListener بتسمع لـ events على العنصر اللي عليه الـ Directive
  // mouseenter = لما الماوس يدخل على العنصر
  @HostListener('mouseenter')  
  onMouseEnter(): void {
    this.element.nativeElement.style.backgroundColor = '#e8f5e9';
    this.element.nativeElement.style.transition = 'background-color 0.3s ease';
  }

  // mouseleave = لما الماوس يخرج من العنصر
  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.element.nativeElement.style.backgroundColor = '';
  }
}
