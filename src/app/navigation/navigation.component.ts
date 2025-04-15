import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navigation',
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})

// function

export class NavigationComponent {
  menuItems = [
    {name: 'Se déplacer', subMenuItems: [
      "Itinéraires",
      "Horaires par ligne/arrêt",
      "A proximité",
      "Vers l'aéropo",
      "Info trafic",
      "Plan intempéries",
      "Lignes express",
    ]},
    {name: "Titres et tarifs", subMenuItems: []},
    {name: "Besoin d'aide", subMenuItems: []},
    {name: "Jobs", subMenuItems: []},
  ]

  menu = signal(false)

  openMenu() {
  this.menu.set(!this.menu());
  console.log(this.menu());
}
}
