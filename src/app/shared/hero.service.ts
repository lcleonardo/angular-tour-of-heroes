import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { Hero } from '../featured/components/heroes/shared/Hero'
import { HEROES } from './mock-heroes'

@Injectable()
export class HeroService {
  constructor() {}

  public getHeroes(): Observable<Hero[]> {
    return of(HEROES)
  }
}
