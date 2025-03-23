import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chats } from '../modules/chatsexample';



const getMessages = (id: number) => {
  return Chats[id]
}

@Component({
  selector: 'app-currentchat',
  imports: [],
  templateUrl: './currentchat.component.html',
  styleUrl: './currentchat.component.scss'
})
export class CurrentchatComponent {
  userId: string | null = ''

  messages: string = JSON.stringify(getMessages(Number(this.userId)))


  constructor(private route: ActivatedRoute) { }

  ngOnInit() { //нипанятна
    this.route.paramMap.subscribe((params) => {
      this.userId = params.get('id')
    });
  }
}
