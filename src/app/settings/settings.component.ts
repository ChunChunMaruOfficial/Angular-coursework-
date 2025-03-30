import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GetRandomService } from '../services/getRandom/get-random.service';
import { UserdataService } from '../services/userdata/userdata.service';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-settings',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  @Output() closing = new EventEmitter<boolean>()

  buttontext: string = 'Apply ✔';
  pfpnumber: number = 0
  nickname: string = ''
  phonenumber: string = ''
  email: string = ''

  constructor(public randomService: GetRandomService, private userdata: UserdataService) {

    this.userdata.nicknamepublic.subscribe(v => {
      if (v) {
        this.nickname = v
      }
    })
    this.userdata.phonenumberpublic.subscribe(v => {
      if (v) {
        this.phonenumber = v
      }
    })
    this.userdata.emailpublic.subscribe(v => {
      if (v) {
        this.email = v
      }
    })
    this.userdata.pfppublic.subscribe(v => {
      if (v) {
        this.pfpnumber = v
      }
    })
  }



  Changepfp() {
    this.pfpnumber = this.randomService.getRandom(0, 9)
    console.log(this.pfpnumber);

  }

  Apply(): void {
    if (this.phonenumber) {
      this.buttontext = 'Apply ✔';
      localStorage.setItem('user', JSON.stringify({ nickname: this.nickname, phonenumber: this.phonenumber, email: this.email, pfp: this.pfpnumber }))
      this.userdata.setemail(this.email)
      this.userdata.setnickname(this.nickname)
      this.userdata.setphonenumber(this.phonenumber)
      this.userdata.setpfp(this.pfpnumber)
      this.Sendclosing()
    } else {
      this.buttontext = 'please, enter a phonenumber';
    }
  }

  Sendclosing() {
    this.closing.emit(false)
  }
}
