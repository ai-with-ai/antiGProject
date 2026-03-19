import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {
  protected readonly currentYear = new Date().getFullYear();

  protected readonly socialLinks = [
    { label: 'GitHub', icon: 'github', url: 'https://github.com/' },
    { label: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com/' },
    { label: 'Email', icon: 'email', url: 'mailto:contact@example.com' },
  ] as const;
}
