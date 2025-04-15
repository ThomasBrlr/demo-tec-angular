import { Component, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-navigation',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})

export class NavigationComponent {
  menuItems = [
    {
      name: 'Se déplacer', subMenuItems: [
        'Itinéraires',
        'Horaires par ligne/arrêt',
        'A proximité',
        'Vers l\'aéropo',
        'Info trafic',
        'Plan intempéries',
        'Lignes express'
      ]
    },
    { name: 'Titres et tarifs', subMenuItems: [] },
    { name: 'Besoin d\'aide', subMenuItems: [] },
    { name: 'Jobs', subMenuItems: [] }
  ];

  menu = signal(false);

  openMenu() {
    this.menu.set(!this.menu());
  }

  subItemsState = signal(false);

  showSubItems() {
    this.subItemsState.set(!this.subItemsState());
  }
}
