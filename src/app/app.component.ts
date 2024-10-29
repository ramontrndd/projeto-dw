import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { CarrouselComponent } from './shared-ui/carrousel/carrousel.component';
import { CarrouselCardsComponent } from "./components/carrousel-cards/carrousel-cards.component";
import { AboutComponent } from "./components/about/about.component";




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavbarComponent, CarrouselComponent, CarrouselCardsComponent, CarrouselCardsComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projeto-dw';
  selectedIndex = 0;
carrouselCard =  [
  {
    title: 'Direito Civil',
    description: 'Na área do Direito Civil desenvolvemos, sobretudo, ações relacionadas a obrigações e direitos de ordem privada, propondo soluções à questões do cotidiano, como contratos, indenizações de cunho moral, material, estético.',
    image:'img01.jpg',
    href: 'https://www.google.com'
  },
  {
    title: 'Card 2',
    description: 'Na área do Direito Civil desenvolvemos, sobretudo, ações relacionadas a obrigações e direitos de ordem privada, propondo soluções à questões do cotidiano, como contratos, indenizações de cunho moral, material, estético.',
    image:'img02.jpg',
    href: 'https://www.google.com'
  },
  {
    title: 'Card 3',
    description: 'Na área do Direito Civil desenvolvemos, sobretudo, ações relacionadas a obrigações e direitos de ordem privada, propondo soluções à questões do cotidiano, como contratos, indenizações de cunho moral, material, estético.',
    image:'img03.jpg',
    href: 'https://www.google.com'
  }
];


}
