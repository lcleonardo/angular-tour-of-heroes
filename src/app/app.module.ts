import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { HeroDetailComponent } from './featured/components/hero-detail/hero-detail.component'
import { HeroesComponent } from './featured/heroes/heroes.component'

@NgModule({
  declarations: [AppComponent, HeroesComponent, HeroDetailComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
