import { Injectable } from '@angular/core'

@Injectable()
export class MessagesService {
  public messages: string[] = []

  constructor() {}

  public add(messages: string): void {
    this.messages.push(messages)
  }

  public clear(): void {
    this.messages = []
  }
}
