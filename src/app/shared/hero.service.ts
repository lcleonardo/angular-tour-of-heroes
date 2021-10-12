import { Injectable } from '@angular/core'
import { Hero } from '../featured/components/heroes/shared/Hero'
import { HEROES } from './mock-heroes'

@Injectable()
export class HeroService {
  constructor() {}

  public getHeroes(): Hero[] {
    return HEROES
  }
}
