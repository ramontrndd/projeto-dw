
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrousel-cards',
  standalone: true,
  imports: [],
  templateUrl: './carrousel-cards.component.html',
  styleUrl: './carrousel-cards.component.scss'
})
export class CarrouselCardsComponent {

  @Input() title = '';
  @Input() image = '';
  @Input() description = '';
  @Input() href = '';

}
