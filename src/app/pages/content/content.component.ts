import { Component, OnInit, signal, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { dataFake, SongArticle } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);

  readonly article = signal<SongArticle | null>(null);
  readonly relatedSongs = signal<SongArticle[]>([]);
  readonly isPlaying = signal<boolean>(false);
  readonly playbackProgress = signal<number>(34);

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.loadArticle(id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  loadArticle(id: string | null): void {
    const found = dataFake.find((item) => item.id === id);
    const selected = found || dataFake[0];
    this.article.set(selected);

    // Pick related songs (excluding current)
    const others = dataFake.filter((item) => item.id !== selected.id).slice(0, 3);
    this.relatedSongs.set(others);
  }

  togglePlay(): void {
    this.isPlaying.update((val) => !val);
  }

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop';
  }
}
