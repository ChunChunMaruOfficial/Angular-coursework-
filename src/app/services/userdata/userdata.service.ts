import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  private nickname = new BehaviorSubject<string | null>(localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')!).nickname
    : null)
  public nicknamepublic = this.nickname.asObservable()

  private phonenumber = new BehaviorSubject<string | null>(localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')!).phonenumber
    : null)
  public phonenumberpublic = this.phonenumber.asObservable()

  private email = new BehaviorSubject<string | null>(localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')!).email
    : null)
  public emailpublic = this.email.asObservable()

  private pfp = new BehaviorSubject<number | null>(localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')!).pfp
    : null)
  public pfppublic = this.pfp.asObservable()

  setnickname(nickname: string) {
    this.nickname.next(nickname)
  }
  setphonenumber(phonenumber: string) {
    this.phonenumber.next(phonenumber)
  }
  setemail(email: string) {
    this.email.next(email)
  }
  setpfp(pfp: number) {
    this.pfp.next(pfp)
  }

}
