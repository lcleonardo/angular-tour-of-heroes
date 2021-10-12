import { Component, OnInit } from '@angular/core'
import { HeroService } from 'src/app/shared/hero.service'
import { Hero } from './shared/Hero'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero

  heroes: Hero[] = []

  constructor(protected service: HeroService) {}

  ngOnInit(): void {
    this.getHeroes()
  }

  public getHeroes(): void {
    this.service.getHeroes().subscribe((value) => (this.heroes = value))
  }

  public onSelect(hero: Hero): void {
    this.selectedHero = hero
  }
}
