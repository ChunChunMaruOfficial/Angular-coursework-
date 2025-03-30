import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SettingsComponent } from '../settings/settings.component';
import { ContactsService } from '../services/contacts/contacts.service';
import { NewcontactComponent } from '../newcontact/newcontact.component';
import { MessagesService } from '../services/messages/messages.service';


@Component({
  selector: 'app-chats',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, FormsModule, SettingsComponent, NewcontactComponent],
  templateUrl: './chats.component.html',
  styleUrl: './chats.component.scss'
})

export class ChatsComponent {
  searching: boolean = false
  settings: boolean | null = null
  newcontact: boolean | null = null
  mouseenter: number = -1
  findcontact: string = ''
  selected: number = -1
  chatsarray: { name: string, time: string | null, id: number }[] = []


  constructor(public contacts: ContactsService, public messages: MessagesService) { this.getAllcontacts() }

  getAllcontacts() {
    this.contacts.contactspublic.subscribe(v => {
      this.chatsarray = v
    })
  }

  seacrhcontact() {
    console.log('1212');
    this.chatsarray.length == 0 && this.getAllcontacts()
    this.findcontact != '' ? this.chatsarray = this.chatsarray.filter(v => v.name.toLowerCase().includes(this.findcontact.toLowerCase())) : this.getAllcontacts()
  }

  deletecontact(i: number) {
    this.contacts.deletecontact(i)
    
  }

  doclosingnewcontact(e: boolean) {
    this.newcontact = e
    console.log(this.newcontact);

  }
  doclosingsettings(e: boolean) {
    this.settings = e
  }
} 