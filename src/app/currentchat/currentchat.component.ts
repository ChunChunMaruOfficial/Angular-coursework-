import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserdataService } from '../services/userdata/userdata.service';
import { ContactsService } from '../services/contacts/contacts.service';
import { FormsModule } from '@angular/forms';
import { MessagesService } from '../services/messages/messages.service';


interface message {
  sender: string
  receiver: string
  time: string
  message: string
  status: boolean
}

@Component({
  selector: 'app-currentchat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './currentchat.component.html',
  styleUrl: './currentchat.component.scss'
})


export class CurrentchatComponent {
  userpfp: number = 0
  userId: number | null = 0
  nickname: string = ''
  pfpnumber: number = 0
  messages: message[] = []
  messagetext: string = '' //сообщение юзера

  constructor(private route: ActivatedRoute, private userdata: UserdataService, public contacts: ContactsService, public messagesserv: MessagesService) { }

  ngOnInit() { //нипанятна
    this.route.paramMap.subscribe((params) => {
      this.userId = Number(params.get('id'))
      this.contacts.contactspublic.subscribe(array => {
        if (this.userId != null) {
          console.log(this.userId);
          this.userpfp = array[this.userId].id
        }
      })
      this.messagesserv.chatspublic.subscribe(array => {
        if (this.userId != null) {
          this.messages = array[this.userId]
        }
      })
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

  sendmessage() {
    if (this.userId != null)
      this.messagesserv.setchat(this.userId, this.messagetext)
    this.messagetext = ''
  }


}
