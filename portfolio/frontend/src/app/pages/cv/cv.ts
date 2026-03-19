import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

export interface TimelineEntry {
  readonly year: string;
  readonly title: string;
  readonly company: string;
  readonly description: string;
  readonly tags: readonly string[];
}

@Component({
  selector: 'app-cv',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cv.html',
  styleUrl: './cv.scss',
})
export class CvComponent {
  protected readonly expandedIndex = signal<number | null>(null);

  protected readonly timeline: readonly TimelineEntry[] = [
    {
      year: '2024 – Present',
      title: 'Senior Software Engineer',
      company: 'Antigravity Labs',
      description: 'Leading the development of AI-powered productivity tools. Architecting scalable microservices with Python and Angular.',
      tags: ['Python', 'Angular', 'AI/ML', 'Microservices'],
    },
    {
      year: '2022 – 2024',
      title: 'Full-Stack Developer',
      company: 'TechVenture Studio',
      description: 'Built real-time data dashboards and analytics platforms. Implemented CI/CD pipelines and cloud infrastructure on GCP.',
      tags: ['FastAPI', 'TypeScript', 'GCP', 'Docker'],
    },
    {
      year: '2020 – 2022',
      title: 'Software Developer',
      company: 'DataSphere Inc.',
      description: 'Developed machine learning pipelines for predictive analytics. Created interactive data visualizations and internal tooling.',
      tags: ['Python', 'Scikit-learn', 'PostgreSQL', 'React'],
    },
    {
      year: '2018 – 2020',
      title: 'Junior Developer',
      company: 'CodeFactory',
      description: 'Contributed to client web applications and REST APIs. Gained deep expertise in modern JavaScript frameworks.',
      tags: ['JavaScript', 'Node.js', 'MongoDB', 'Vue.js'],
    },
    {
      year: '2014 – 2018',
      title: 'B.Sc. Computer Science',
      company: 'University of Technology',
      description: 'Graduated with honors. Thesis on neural network optimization for real-time image recognition systems.',
      tags: ['Algorithms', 'Data Structures', 'ML', 'Research'],
    },
  ];

  toggleEntry(index: number): void {
    this.expandedIndex.update(current => current === index ? null : index);
  }

  downloadCv(): void {
    // Placeholder. In production, this would serve a real PDF.
    window.alert('CV PDF download will be available soon!');
  }
}
