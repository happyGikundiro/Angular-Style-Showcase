import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  themeIcon = 'brightness_6';

  toggleTheme() {
    const body = document.body;
    const currentTheme = body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';

    if (currentTheme === 'light-theme') {
      body.classList.replace('light-theme', 'dark-theme');
      this.themeIcon = 'brightness_7';
    } else {
      body.classList.replace('dark-theme', 'light-theme');
      this.themeIcon = 'brightness_6';
    }
  }
}

