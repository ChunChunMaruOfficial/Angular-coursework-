import { Component } from '@angular/core';
import { data } from '../modules/chatsarray';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-chats',
  imports: [CommonModule,RouterOutlet,RouterLink],
  templateUrl: './chats.component.html',
  styleUrl: './chats.component.scss'
})

export class ChatsComponent {
  chatsarray: { name: string, time: string | null }[] = data
}