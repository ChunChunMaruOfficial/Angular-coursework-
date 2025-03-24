import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chats } from '../modules/chatsexample';
import { CommonModule } from '@angular/common';

interface message {
  sender: string
  receiver: string
  time:  string
  message: string
  status: string
}

const getMessages = (id: number) => {
  return Chats[id]
}

@Component({
  selector: 'app-currentchat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './currentchat.component.html',
  styleUrl: './currentchat.component.scss'
})
export class CurrentchatComponent {
  userId: string | null = ''

  messages: message[] = getMessages(Number(this.userId))


  constructor(private route: ActivatedRoute) { }

  ngOnInit() { //нипанятна
    this.route.paramMap.subscribe((params) => {
      this.userId = params.get('id')
      this.messages = getMessages(Number(this.userId))
    });
  }
}
