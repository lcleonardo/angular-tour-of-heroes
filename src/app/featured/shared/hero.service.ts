import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { HEROES } from 'src/app/shared/mock-heroes'
import { Hero } from '../components/heroes/shared/Hero'

@Injectable()
export class HeroService {
  constructor() {}

  public getHeroes(): Observable<Hero[]> {
    return of(HEROES)
  }
}
