import { Component } from '@angular/core';
import { data } from '../modules/chatsarray';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'app-chats',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, FormsModule, SettingsComponent],
  templateUrl: './chats.component.html',
  styleUrl: './chats.component.scss'
})

export class ChatsComponent {
  searching: boolean = false
  settings: boolean | null = null

  chatsarray: { name: string, time: string | null }[] = data.concat(data)

  doclosing(e: boolean) {
    this.settings = e
  }
} 