import { Component, signal, computed } from '@angular/core';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { dataFake, SongArticle } from '../../data/dataFake';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuTitleComponent, BigCardComponent, SmallCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  readonly allArticles = signal<SongArticle[]>(dataFake);
  readonly currentPage = signal<number>(0);
  readonly pageSize = 4; // 1 big card + 3 small cards per page

  readonly totalPages = computed(() => {
    return Math.ceil(this.allArticles().length / this.pageSize);
  });

  readonly currentBigCard = computed(() => {
    const start = this.currentPage() * this.pageSize;
    return this.allArticles()[start] || this.allArticles()[0];
  });

  readonly currentSmallCards = computed(() => {
    const start = this.currentPage() * this.pageSize + 1;
    const end = start + 3;
    const slice = this.allArticles().slice(start, end);
    if (slice.length > 0) return slice;
    // Fallback if odd number
    return this.allArticles().slice(1, 4);
  });

  nextPage(): void {
    const next = (this.currentPage() + 1) % this.totalPages();
    this.currentPage.set(next);
  }

  prevPage(): void {
    const prev = (this.currentPage() - 1 + this.totalPages()) % this.totalPages();
    this.currentPage.set(prev);
  }

  setPage(pageIndex: number): void {
    this.currentPage.set(pageIndex);
  }
}
