import { Component, Input, OnInit } from '@angular/core'
import { Hero } from '../heroes/shared/Hero'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  @Input() public hero?: Hero

  constructor() {}

  ngOnInit(): void {}
}
