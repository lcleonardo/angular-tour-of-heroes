import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'
import { HeroDetailComponent } from './featured/components/hero-detail/hero-detail.component'
import { HeroesComponent } from './featured/components/heroes/heroes.component'
import { MessagesComponent } from './featured/components/messages/messages.component'
import { HeroService } from './featured/shared/hero.service'
import { MessagesService } from './featured/shared/messages.service';
import { DashboardComponent } from './featured/components/dashboard/dashboard.component'

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [HeroService, MessagesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
