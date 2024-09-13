import { ElementRef } from '@angular/core';
import { HoverEffectDirective } from './hover-effect.directive';

describe('HoverEffectDirective', () => {
  let directive: HoverEffectDirective;
  let elementRef: ElementRef;

  beforeEach(() => {
    elementRef = {
      nativeElement: document.createElement('div')
    } as ElementRef;

    directive = new HoverEffectDirective(elementRef);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should set background color on mouse enter', () => {
    directive.hoverColor = 'rgba(0,0,0,0.1)';
    directive.onMouseEnter();
    expect(elementRef.nativeElement.style.backgroundColor).toEqual('rgba(0, 0, 0, 0.1)');
  });

  it('should remove background color on mouse leave', () => {
    directive.onMouseLeave();
    expect(elementRef.nativeElement.style.backgroundColor).toBe('');
  });
});
