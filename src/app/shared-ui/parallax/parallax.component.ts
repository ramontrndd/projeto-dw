import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parallax',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parallax.component.html',
  styleUrl: './parallax.component.scss'
})
export class ParallaxComponent {
  @Input() backgroundImageUrl = '';
}
