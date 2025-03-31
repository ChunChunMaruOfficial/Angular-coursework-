import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserdataService } from '../services/userdata/userdata.service';
import { ContactsService } from '../services/contacts/contacts.service';
import { FormsModule } from '@angular/forms';
import { MessagesService } from '../services/messages/messages.service';
import { RandomanswersService } from '../services/randomanswers/randomanswers.service';
import { GetRandomService } from '../services/getRandom/get-random.service';

interface message {
  sender: string
  receiver: string
  time: string
  message: string
  status?: boolean
}

@Component({
  selector: 'app-currentchat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './currentchat.component.html',
  styleUrl: './currentchat.component.scss'
})


export class CurrentchatComponent {
  fremdname: string = ''
  userId: number | null = 0
  nickname: string = ''
  pfpnumber: number = 0
  messages: message[] = []
  messagetext: string = '' //сообщение юзера
  edittext: string = ''
  idofeditingmessage: number = -1
  contactsarray: { name: string, time: string | null, id: number }[] = []

  constructor(public getRandom: GetRandomService, private route: ActivatedRoute, private userdata: UserdataService, public contacts: ContactsService, public messagesserv: MessagesService, public randomanswers: RandomanswersService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.userId = Number(params.get('id'))
      this.contacts.contactspublic.subscribe(array => {
        if (this.userId != null) {
          this.contactsarray = array
          console.log(this.contactsarray[this.userId].name)

          const foundContact = this.contactsarray.find(v => v.id === this.userId)
          this.fremdname = foundContact ? foundContact.name : ''
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
    if (this.userId != null && this.messagetext != '')
      this.messagesserv.setchat(this.userId, this.messagetext, this.nickname, this.contactsarray[this.userId].name)

    setTimeout(() => {
      if (this.userId != null)
        this.messagesserv.setchat(this.userId, 'печатает..', this.contactsarray[this.userId].name, this.nickname)
    }, this.getRandom.getRandom(601, 2000));
    setTimeout(() => {
      if (this.userId != null)
        this.messagesserv.setchattext(this.userId, this.randomanswers.getrandomAnswer())
    }, this.getRandom.getRandom(2000, 5000));

    this.messagetext = ''
  }

  deletemessage(n: number) {
    if (this.userId != null)
      this.messagesserv.deletemessage(this.userId, n)
    this.removeediting()
  }

  editmessage(n: number) {
    this.idofeditingmessage = n
    this.edittext = this.messages[n].message
    this.messagetext = this.messages[n].message
  }

  sendediting() {
    if (this.userId != null)
      this.messagesserv.editmessage(this.userId, this.idofeditingmessage, this.messagetext)
    this.removeediting()
  }

  removeediting() {
    this.edittext = ''
    this.messagetext = ''
  }

}
