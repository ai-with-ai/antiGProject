import { Injectable, signal } from '@angular/core';

export interface BlogPost {
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly tags: readonly string[];
}

/**
 * Service that consumes the FastAPI backend to retrieve blog posts.
 * Uses Angular Signals for reactive state management.
 */
@Injectable({ providedIn: 'root' })
export class BlogService {
  private readonly _apiBase = 'http://localhost:8000/api/v1';

  private readonly _posts = signal<readonly BlogPost[]>([]);
  private readonly _loading = signal(false);
  private readonly _error = signal<string | null>(null);

  readonly posts = this._posts.asReadonly();
  readonly loading = this._loading.asReadonly();
  readonly error = this._error.asReadonly();

  async fetchPosts(): Promise<void> {
    this._loading.set(true);
    this._error.set(null);

    try {
      const response = await fetch(`${this._apiBase}/posts`);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      const data: BlogPost[] = await response.json();
      this._posts.set(Object.freeze(data));
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to fetch posts';
      this._error.set(message);
    } finally {
      this._loading.set(false);
    }
  }

  async fetchPost(id: string): Promise<BlogPost | null> {
    try {
      const response = await fetch(`${this._apiBase}/posts/${id}`);
      if (!response.ok) return null;
      return await response.json();
    } catch {
      return null;
    }
  }
}
