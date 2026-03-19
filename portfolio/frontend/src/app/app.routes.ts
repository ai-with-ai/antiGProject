import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent),
  },
  {
    path: 'cv',
    loadComponent: () => import('./pages/cv/cv').then(m => m.CvComponent),
  },
  {
    path: 'blog',
    loadComponent: () => import('./pages/blog/blog').then(m => m.BlogComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
