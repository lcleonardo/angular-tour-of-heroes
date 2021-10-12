import { Component, OnInit } from '@angular/core'
import { HeroService } from '../../shared/hero.service'
import { Hero } from './shared/Hero'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = []

  constructor(protected heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes()
  }

  public getHeroes(): void {
    this.heroService.getHeroes().subscribe((value) => (this.heroes = value))
  }
}
