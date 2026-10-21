import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css',
})
export class SmallCardComponent {
  @Input() id: string = '0';
  @Input() photoCover: string = '';
  @Input() cardTitle: string = '';
  @Input() artist: string = '';
  @Input() rank: number = 0;
  @Input() streams: string = '';

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop';
  }
}
