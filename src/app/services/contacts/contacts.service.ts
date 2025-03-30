import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
 
export class ContactsService {
  private contacts = new BehaviorSubject<{ name: string, time: string | null, id: number }[]>([
    { name: "Алексей Учитель", time: "08:17 AM", id: 0 },
    { name: "Сестра", time: "07:45 AM", id: 1 },
    { name: "Тупой сосед", time: "09:00 AM", id: 2 },
    { name: "Коля коля", time: "02:30 AM", id: 3 },
    { name: "Дядя Вася", time: null, id: 4 },
    { name: "Крутая тётя", time: "10:30 PM", id: 5 },
    { name: "Неизвестный друг", time: "01:45 PM", id: 6 },
    { name: "Геймер3000", time: "11:50 AM", id: 7 },
    { name: "Умный сосед", time: null, id: 8 }
  ])

  public contactspublic = this.contacts.asObservable()

  pushcontacts(contacts: { name: string, time: string | null, id:number }) {
    const newvalue = this.contacts.value
    this.contacts.next([...newvalue, contacts])
  }

  deletecontact(id: number) {
    const newvalue = this.contacts.value.filter((v, i) => i != id)
    this.contacts.next(newvalue)
  }
}
