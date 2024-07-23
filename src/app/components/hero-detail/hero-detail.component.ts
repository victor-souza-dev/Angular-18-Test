import { Component, Input } from '@angular/core';
import { Hero } from '../../interfaces/Hero';
import { FormsModule } from '@angular/forms';
import { NgIf, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [FormsModule, NgIf, UpperCasePipe],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.sass'
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
}
