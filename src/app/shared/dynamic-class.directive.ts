import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appDynamicClass]',
})
export class DynamicClassDirective implements OnChanges {
  @Input() backgroundClass = 'bg-light';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(): void {
    this.updateClass();
  }

  updateClass() {
    if (this.backgroundClass) {
      this.renderer.addClass(this.el.nativeElement, this.backgroundClass);
    }
  }
}
