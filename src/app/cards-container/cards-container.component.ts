import { Component } from '@angular/core';

@Component({
  selector: 'app-cards-container',
  imports: [],
  templateUrl: './cards-container.component.html',
  styleUrl: './cards-container.component.scss'
})
export class CardsContainerComponent {
  chipsItems = [
    {name: 'Booba', picture: 'https://cataas.com/cat'},
    {name: 'Lubna', picture: 'https://cataas.com/cat'},
    {name: 'Triss', picture: 'https://cataas.com/cat'},
    {name: 'Neftis', picture: 'https://cataas.com/cat'},
  ]
}
