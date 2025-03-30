import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GetRandomService } from '../services/getRandom/get-random.service';
import { ContactsService } from '../services/contacts/contacts.service';
@Component({
  selector: 'app-newcontact',
  imports: [FormsModule],
  templateUrl: './newcontact.component.html',
  styleUrl: './newcontact.component.scss'
})

export class NewcontactComponent {
  @Output() closing = new EventEmitter<boolean>()

  nickname: string = ''
  phonenumber: string = ''
  email: string = ''
  pfpnumber: number = 0
  alert: boolean = false

  constructor(public randomService: GetRandomService, public contacts: ContactsService) { }

  contactadding() {
    if (!this.nickname && !this.phonenumber && !this.email) {
      this.alert = true

    } else {
      this.alert = false
      this.contacts.pushcontacts({ name: this.nickname || this.phonenumber || this.email, time: `${this.randomService.getRandom(1, 23)} : ${this.randomService.getRandom(0, 60)} AM`, id: this.pfpnumber })
      this.nickname = ''
      this.phonenumber = ''
      this.email = ''
    }
  }

  Changepfp() {
    this.pfpnumber = this.randomService.getRandom(0, 9)
    console.log(this.pfpnumber);
  }

  Sendclosing() {
    this.closing.emit(false)
  }
}
