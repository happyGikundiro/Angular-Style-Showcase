import { render } from '@testing-library/angular';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  it('should create the component', async () => {
    const { fixture } = await render(HeaderComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should apply dark theme if saved theme is dark', async () => {
    localStorage.setItem('theme', 'dark');
    const { fixture } = await render(HeaderComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance.isDarkTheme).toBe(true);
    expect(document.body.classList).toContain('dark-theme');
  });

  it('should toggle theme', async () => {
    localStorage.setItem('theme', 'light');
    const { fixture } = await render(HeaderComponent);
    fixture.detectChanges();
    
    fixture.componentInstance.toggleTheme();
    fixture.detectChanges();
    expect(fixture.componentInstance.isDarkTheme).toBe(true);
    expect(document.body.classList).toContain('dark-theme');

    fixture.componentInstance.toggleTheme();
    fixture.detectChanges();
    expect(fixture.componentInstance.isDarkTheme).toBe(false);
    expect(document.body.classList).toContain('light-theme');
  });
});
