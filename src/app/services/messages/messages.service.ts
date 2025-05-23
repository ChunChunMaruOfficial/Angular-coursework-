import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ContactsService } from '../contacts/contacts.service';
import { UserdataService } from '../userdata/userdata.service';
import { GetRandomService } from '../getRandom/get-random.service';
@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private chats = new BehaviorSubject<{ sender: string, receiver: string, time: string, message: string, status?: boolean }[][]>([
    [
      { sender: "user", receiver: "Алексей Учитель", time: "08:10", message: "Алексей, вы случайно не видели мой конспект? Я его вчера использовал как подставку для пиццы...", status: true },
      { sender: "Алексей Учитель", receiver: "user", time: "08:12", message: "Нашел. Страница 3 с рисунком 'котик в космосе' — это новая методика запоминания формул?" },
      { sender: "user", receiver: "Алексей Учитель", time: "08:13", message: "Э... Да! Космический кот объясняет теорию относительности!", status: true },
      { sender: "Алексей Учитель", receiver: "user", time: "08:15", message: "Завтра на уроке ты объяснишь это всему классу. С котом." }
    ],
    [
      { sender: "Сестра", receiver: "user", time: "14:00", message: "Срочно! Мама спрашивает пароль от Wi-Fi. Говорить правду или как обычно?" },
      { sender: "user", receiver: "Сестра", time: "14:01", message: "Скажи, что хакеры взломали роутер и теперь пароль — 'СлаваКотятам2024'", status: true },
      { sender: "Сестра", receiver: "user", time: "14:03", message: "Она вбила 'СЛ4В4К0ТЯТ4М' и кричит, что не работает. Что делать?" },
      { sender: "user", receiver: "Сестра", time: "14:05", message: "Беги в магазин за тортом. Отвлечем её едой!", status: false }
    ],
    [
      { sender: "Тупой сосед", receiver: "user", time: "19:30", message: "Твой кот опять на балконе устроил концерт! Он там воет на сирену скорой?" },
      { sender: "user", receiver: "Тупой сосед", time: "19:31", message: "Это не вой, это кавер на трек Билли Айлиш. Ты просто не ценитель!", status: true },
      { sender: "Тупой сосед", receiver: "user", time: "19:33", message: "А если я вызови полицию 'ценителям'?" },
      { sender: "user", receiver: "Тупой сосед", time: "19:35", message: "Они оценят его талант и устроят коту прослушивание. Спокойной ночи!", status: false }
    ],
    [
      { sender: "Коля коля", receiver: "user", time: "21:10", message: "Братан, ты в игры сегодня? У меня новый читерский скин для танка!" },
      { sender: "user", receiver: "Коля коля", time: "21:11", message: "Коля, твой 'скин' в прошлый раз сделал мой ПК кирпичом. Нет!", status: true },
      { sender: "Коля коля", receiver: "user", time: "21:13", message: "Но тут пиксельный танк с лазерами из глаз! Ты всё пропускаешь!" },
      { sender: "user", receiver: "Коля коля", time: "21:15", message: "Ладно, но если мой комп взорвётся — хоронить будешь у себя в гараже.", status: true }
    ],
    [
      { sender: "Дядя Вася", receiver: "user", time: "12:45", message: "Племянник, как в телефоне фото отправить? Я тут шашлык снял — шедевр!" },
      { sender: "user", receiver: "Дядя Вася", time: "12:47", message: "Жми на синюю стрелку и ищи мое имя. И да, я уже чувствую запах через экран!", status: true },
      { sender: "Дядя Вася", receiver: "user", time: "12:50", message: "Отправил 15 раз. Чекни, а то мясо остывает!" },
      { sender: "user", receiver: "Дядя Вася", time: "12:51", message: "Дядя, у меня 45 уведомлений. Вы что, с каждого угла шампура фоткали?", status: false }
    ],
    [
      { sender: "Крутая тётя", receiver: "user", time: "16:20", message: "Племянник, кроссовки с платьем — это стильно или я отстала от трендов? 👗👟" },
      { sender: "user", receiver: "Крутая тётя", time: "16:22", message: "Тёть, это называется 'балетки для апокалипсиса'. Ты в тренде! Следующий лук — противогаз с кружевами. 💣", status: true },
      { sender: "Крутая тётя", receiver: "user", time: "16:25", message: "А если добавить к этому кепку с единорогом? 🦄 И live на TikTok: 'Мода после ядерной зимы'?" },
      { sender: "user", receiver: "Крутая тётя", time: "16:27", message: "Ты либо звезда TikTok, либо беглец из психушек. Рискуй! Ставлю на второе. 🏃♀️", status: false }
    ],
    [
      { sender: "Неизвестный друг", receiver: "user", time: "23:45", message: "Ты тот, кто в 5-м классе украл глобус и закопал его у школы? 🌍 Там теперь растет 'Африка 2.0'." },
      { sender: "user", receiver: "Неизвестный друг", time: "23:46", message: "Во-первых, это был эксперимент по выращиванию Антарктиды. Во-вторых, ты кто — эколог-мемолог? 🌱", status: true },
      { sender: "Неизвестный друг", receiver: "user", time: "23:48", message: "Я — голос из прошлого. Глобус до сих пор воет в яме. Он в тренде у духов! 👻 #ПроклятиеМеридианов" },
      { sender: "user", receiver: "Неизвестный друг", time: "23:50", message: "Ладно, но если там выросла Австралия — это не моя вина. Звони Стиву Ирвину. 🐊", status: false }
    ],
    [
      { sender: "Геймер3000", receiver: "user", time: "20:00", message: "Бро, читерим на завтрашнем тесте? У меня клавиатура с RGB — это +50% к скорости! 💨" },
      { sender: "user", receiver: "Геймер3000", time: "20:01", message: "Мечтай. Учитель сидит в Twitch — он нас забаннит за читы. 🚫 #СлитоВДискорд", status: true },
      { sender: "Геймер3000", receiver: "user", time: "20:03", message: "Тогда используем стилус как джойстик. Я прокачал скилл 'невидимая шпаргалка'! 🕶️" },
      { sender: "user", receiver: "Геймер3000", time: "20:05", message: "Если завалю — ты меня реваншируешь в лобби после уроков. P.S. Принеси кофе для буста. ☕", status: false }
    ],
    [
      { sender: "Умный сосед", receiver: "user", time: "18:10", message: "Твой кактус на подоконнике излучает альфа-волны. Проверь его Geiger-счётчиком. ☢️" },
      { sender: "user", receiver: "Умный сосед", time: "18:12", message: "Иван, это не кактус, это Wi-Fi роутер в чехле. Но спасибо за паранойю. 📶", status: true },
      { sender: "Умный сосед", receiver: "user", time: "18:15", message: "Тогда объясни, почему мой кот теперь говорит на бинарном коде? 01101101 01111001 01100001 01110101... 🤖" },
      { sender: "user", receiver: "Умный сосед", time: "18:20", message: "Перевел: 'Дай печенек'. Поздравляю, у вас первый AI кот! Теперь он будет ддосить холодильник. 🍪", status: true }
    ],
    [
      { sender: "user", receiver: "user", time: "00:01", message: "Я тут клон? Или это глюк в матрице? 🕳️ P.S. Если да, то какой из нас оригинал?", status: true },
      { sender: "u2ser", receiver: "user", time: "00:02", message: "Шок! Сегодня ты забыл поставить хлеб в холодильник. Это начало конца. 🍞⚰️" },
      { sender: "user", receiver: "user", time: "00:05", message: "Напоминаю: завтра забрать мозг из химчистки. И купить молоко. Или это уже сделал мой клон? 🥛", status: true },
      { sender: "u2ser", receiver: "user", time: "00:06", message: "P.S. Ты гений. Но молоко всё равно забудь. #Судьба 🥛🔫" }
    ]
  ])


  public chatspublic = this.chats.asObservable()

  chatsarray: { name: string, time: string | null, id: number }[] = []

  constructor(public contacts: ContactsService, public userinfo: UserdataService, public getRandom: GetRandomService) {
    this.contacts.contactspublic.subscribe(v => {
      this.chatsarray = v
    })
  }


  setchat(i: number, message: string, sender: string, receiver: string) {
    const updatechat = [...this.chats.value];
    updatechat[i].push({ sender: sender, receiver: receiver, time: `${new Date().getHours()}:${new Date().getMinutes() }`, message: message, status: false })
    this.chats.next(updatechat)

    setTimeout(() => {
      this.userinfo.nicknamepublic.subscribe(v =>
        sender == v ? this.chats.value[i][this.chats.value[i].length - 1].status = true : ''
      )
    }, this.getRandom.getRandom(300, 600));

  }

  setchattext(i: number, message: string) {
    this.chats.value[i][this.chats.value[i].length - 1].message = message
  }

  deletemessage(chatid: number, messageid: number) {
    const updatechat = [...this.chats.value];
    updatechat[chatid] = updatechat[chatid].filter((v, i) => i != messageid)
    this.chats.next(updatechat)
  }

  editmessage(chatid: number, messageid: number, newtext: string) {
    this.chats.value[chatid][messageid].message = newtext
  }

}
