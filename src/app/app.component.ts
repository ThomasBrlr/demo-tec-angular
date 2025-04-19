import { Component } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {NavigationComponent} from './navigation/navigation.component';
import { CardsContainerComponent } from './cards-container/cards-container.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, NavigationComponent, CardsContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',})
export class AppComponent {
  title = 'demo-tec';
}
