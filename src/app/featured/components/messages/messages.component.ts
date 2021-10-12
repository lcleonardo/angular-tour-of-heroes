import { Component, OnInit } from '@angular/core'
import { MessagesService } from '../../shared/messages.service'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  constructor(protected service: MessagesService) {}

  ngOnInit(): void {}

  public length(): number {
    return this.service.messages.length
  }

  public clear(): void {
    return this.service.clear()
  }

  public messages(): string[] {
    return this.service.messages
  }
}
