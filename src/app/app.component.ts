import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatsComponent } from './chats/chats.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ChatsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Chats';
}
