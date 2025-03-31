import { Routes } from '@angular/router';
import { ChatsComponent } from './chats/chats.component';
import { CurrentchatComponent } from './currentchat/currentchat.component';
import { AuthorisationComponent } from './authorisation/authorisation.component';
export const routes: Routes = [
    {
        path: 'user',
        component: ChatsComponent,
        children: [
            { path: ':id', component: CurrentchatComponent }
        ],
    },
    {
        path: '',
        component: AuthorisationComponent,
    }
];
