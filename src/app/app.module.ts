import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { HeroDetailComponent } from './featured/components/hero-detail/hero-detail.component'
import { HeroesComponent } from './featured/components/heroes/heroes.component'
import { MessagesComponent } from './featured/components/messages/messages.component'
import { HeroService } from './featured/shared/hero.service'
import { MessagesService } from './featured/shared/messages.service'

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [HeroService, MessagesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
