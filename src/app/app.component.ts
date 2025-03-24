import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatsComponent } from './chats/chats.component';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ChatsComponent,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Chats';
}
