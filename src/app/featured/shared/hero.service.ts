import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { HEROES } from 'src/app/shared/mock-heroes'
import { Hero } from '../components/heroes/shared/Hero'
import { MessagesService } from './messages.service'

@Injectable()
export class HeroService {
  constructor(protected messages: MessagesService) {}

  public getHeroes(): Observable<Hero[]> {
    this.messages.add('HeroService: fetched heroes.')
    return of(HEROES)
  }
}
