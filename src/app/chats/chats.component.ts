import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SettingsComponent } from '../settings/settings.component';
import { ContactsService } from '../services/contacts/contacts.service';
import { NewcontactComponent } from '../newcontact/newcontact.component';

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

  constructor(public contacts: ContactsService) {
    this.contacts.contactspublic.subscribe(v => {
      this.chatsarray = v
    })
  }

  chatsarray: { name: string, time: string | null, id: number }[] = []

  deletecontact(i:number){
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