import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { HeroDetailComponent } from './featured/components/hero-detail/hero-detail.component'
import { HeroesComponent } from './featured/components/heroes/heroes.component'
import { HeroService } from './shared/hero.service';
import { MessagesComponent } from './featured/components/messages/messages.component'

@NgModule({
  declarations: [AppComponent, HeroesComponent, HeroDetailComponent, MessagesComponent],
  imports: [BrowserModule, FormsModule],
  providers: [HeroService],
  bootstrap: [AppComponent],
})
export class AppModule {}
