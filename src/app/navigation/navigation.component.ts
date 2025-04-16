import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navigation',
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
        'Vers l\'aéroport',
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
