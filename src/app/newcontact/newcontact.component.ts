import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GetRandomService } from '../services/getRandom/get-random.service';

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


constructor(public randomService: GetRandomService){}

contactadding(){

}

  Changepfp() {
    this.pfpnumber = this.randomService.getRandom(0, 9)
    console.log(this.pfpnumber);
  }

  Sendclosing() {
    this.closing.emit(false)
  }
}
