import { Component, OnInit } from '@angular/core'
import { HeroService } from '../../shared/hero.service'
import { Hero } from '../heroes/shared/Hero'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public heroes: Hero[] = []

  constructor(protected service: HeroService) {}

  ngOnInit(): void {
    this.getHeroes()
  }
  getHeroes(): void {
    this.service.getHeroes().subscribe((value) => (this.heroes = value))
  }
}
