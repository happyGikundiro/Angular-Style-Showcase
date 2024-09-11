import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appThemeToggle]'
})
export class ThemeToggleDirective {
  @HostBinding('class') elementClass = 'light-theme';

  toggleTheme() {
    this.elementClass = this.elementClass === 'light-theme' ? 'dark-theme' : 'light-theme';
  }
}
