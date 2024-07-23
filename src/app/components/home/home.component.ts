import { Component } from '@angular/core';
import { HeroesComponent } from '../heroes/heroes.component';
import { MessagesComponent } from '../messages/messages.component';
import { LocationComponent } from '../location/location.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroesComponent, MessagesComponent, LocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  title = 'Tours of Heroes';
}
