import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css',
})
export class BigCardComponent {
  @Input() id: string = '0';
  @Input() photoCover: string = '';
  @Input() cardTitle: string = '';
  @Input() cardDescription: string = '';
  @Input() artist: string = '';
  @Input() rank: number = 1;
  @Input() streams: string = '';

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop';
  }
}
