import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chats } from '../modules/chatsexample';
import { CommonModule } from '@angular/common';
import { UserdataService } from '../services/userdata/userdata.service';

interface message {
  sender: string
  receiver: string
  time: string
  message: string
  status: boolean
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
  userId: number | null = 0
  nickname: string = ''
  pfpnumber: number = 0
  messages: message[] = getMessages(Number(this.userId))

  constructor(private route: ActivatedRoute, private userdata: UserdataService) { }

  ngOnInit() { //нипанятна
    this.route.paramMap.subscribe((params) => {
      console.log(this.pfpnumber);

      this.userId = Number(params.get('id'))
      this.messages = getMessages(Number(this.userId))
    });

    this.userdata.pfppublic.subscribe(v => {
      if (v) {
        this.pfpnumber = v
      }
    })
    this.userdata.nicknamepublic.subscribe(v => {
      if (v) {
        this.nickname = v
      }
    })
  }
}
