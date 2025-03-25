import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
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

  constructor(private router: Router) {}

  logging() {
    if (this.phonenumber) {
      this.h2text = '💅 Viber 2'
      if (!localStorage.getItem('user')) {
        localStorage.setItem('user', JSON.stringify({ nickname: this.nickname, phonenumber: this.phonenumber, email: this.email }))
      }
      this.router.navigate(['../']);
    } else {
      this.h2text = 'введите номер, сэр'
    }
  }
}
