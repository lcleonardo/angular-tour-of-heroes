import { Component, OnInit } from '@angular/core'
import { HEROES } from 'src/app/shared/mock-heroes'
import { Hero } from './shared/Hero'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero

  heroes: Hero[] = HEROES

  constructor() {}

  ngOnInit(): void {}

  public onSelect(hero: Hero): void {
    this.selectedHero = hero
  }
}
