import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private contacts = new BehaviorSubject<{ name: string, time: string | null }[]>([
    { name: "Алексей Учитель", time: "08:17 AM" },
    { name: "Сестра", time: "07:45 AM" },
    { name: "Тупой сосед", time: "09:00 AM" },
    { name: "Коля коля", time: "02:30 AM" },
    { name: "Дядя Вася", time: null },
    { name: "Крутая тётя", time: "10:30 PM" },
    { name: "Неизвестный друг", time: "01:45 PM" },
    { name: "Геймер3000", time: "11:50 AM" },
    { name: "Умный сосед", time: null }
  ])
  public contactspublic = this.contacts.asObservable()

  pushcontacts(contacts: { name: string, time: string | null }) {
    const newvalue = this.contacts.value
    this.contacts.next([...newvalue, contacts])
  }

  deletecontact(id: number) {
    const newvalue = this.contacts.value.filter((v, i) => i != id)
    this.contacts.next(newvalue)
  }
}
