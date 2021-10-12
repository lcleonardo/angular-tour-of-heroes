import { Component, OnInit } from '@angular/core'
import { HeroService } from '../../shared/hero.service'
import { MessagesService } from '../../shared/messages.service'
import { Hero } from './shared/Hero'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero

  heroes: Hero[] = []

  constructor(
    protected heroService: HeroService,
    protected messageService: MessagesService,
  ) {}

  ngOnInit(): void {
    this.getHeroes()
  }

  public onSelect(hero: Hero): void {
    this.selectedHero = hero
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  }

  public getHeroes(): void {
    this.heroService.getHeroes().subscribe((value) => (this.heroes = value))
  }
}
