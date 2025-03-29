import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { GetRandomService } from '../services/getRandom/get-random.service';
import { UserdataService } from '../services/userdata/userdata.service';

@Component({
  selector: 'app-authorisation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './authorisation.component.html',
  styleUrl: './authorisation.component.scss'
})

export class AuthorisationComponent {
  nickname: string = ""
  phonenumber: string = ""
  email: string = ""
  h2text: string = '💅 Viber 2'
  pfpnumber: number

  constructor(private router: Router, public randomService: GetRandomService, private userdata: UserdataService) {
    this.pfpnumber = this.randomService.getRandom(0, 9)
  }

  Changepfp() {
    this.pfpnumber = this.randomService.getRandom(0, 9)
    console.log(this.pfpnumber);

  }

  logging() {
    if (this.phonenumber) {
      this.h2text = '💅 Viber 2'
      localStorage.setItem('user', JSON.stringify({ nickname: this.nickname, phonenumber: this.phonenumber, email: this.email, pfp: this.pfpnumber }))

      this.userdata.setemail(this.email)
      this.userdata.setnickname(this.nickname)
      this.userdata.setphonenumber(this.phonenumber)
      this.userdata.setpfp(this.pfpnumber)

      this.router.navigate(['../']);
    } else {
      this.h2text = 'введите номер, сэр'
    }
  }
}
