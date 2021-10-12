import { Location } from '@angular/common'
import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { HeroService } from '../../shared/hero.service'
import { Hero } from '../heroes/shared/Hero'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  public hero?: Hero

  constructor(
    protected route: ActivatedRoute,
    protected service: HeroService,
    protected location: Location,
  ) {}

  ngOnInit(): void {
    this.getHero()
  }
  getHero(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'))
    this.service.getHero(id).subscribe((value) => (this.hero = value))
  }
}
