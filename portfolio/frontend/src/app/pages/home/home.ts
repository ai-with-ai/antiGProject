import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  protected readonly hobbies = [
    { emoji: '🤖', name: 'Artificial Intelligence' },
    { emoji: '⚽', name: 'Football Analytics' },
    { emoji: '🎮', name: 'Gaming' },
    { emoji: '📊', name: 'Data Science' },
    { emoji: '✈️', name: 'Traveling' },
    { emoji: '📚', name: 'Tech Writing' },
  ] as const;

  protected readonly quickLinks = [
    { label: 'LinkedIn', url: 'https://linkedin.com/', icon: '🔗' },
    { label: 'Gmail', url: 'mailto:contact@example.com', icon: '📧' },
    { label: 'StatsForBetting', url: 'https://statsforbetting.com/', icon: '📊' },
  ] as const;
}
