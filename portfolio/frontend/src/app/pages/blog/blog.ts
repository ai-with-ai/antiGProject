import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { BlogService, BlogPost } from '../../core/services/blog.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [SlicePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
export class BlogComponent implements OnInit {
  private readonly blogService = inject(BlogService);

  protected readonly posts = this.blogService.posts;
  protected readonly loading = this.blogService.loading;
  protected readonly error = this.blogService.error;

  ngOnInit(): void {
    this.blogService.fetchPosts();
  }
}
