import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { LocationApi } from '../../models/location';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [NgFor],
  templateUrl: './location.component.html',
  styleUrl: './location.component.sass'
})
export class LocationComponent {
  locations: LocationApi[] = [];

  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.locationService.locations()
        .subscribe(locations => this.locations = locations);
  }
}
