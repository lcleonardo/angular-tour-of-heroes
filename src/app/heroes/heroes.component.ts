import { Component, OnInit } from '@angular/core'
import { Hero } from './shared/Hero'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Leonardo',
  }

  constructor() {}

  ngOnInit(): void {}
}
