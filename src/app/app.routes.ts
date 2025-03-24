import { Routes } from '@angular/router';
import { ChatsComponent } from './chats/chats.component';
import { CurrentchatComponent } from './currentchat/currentchat.component';
import { AuthorisationComponent } from './authorisation/authorisation.component';
export const routes: Routes = [
    {
        path: '',
        component: ChatsComponent,
        children: [
            { path: 'user/:id', component: CurrentchatComponent }
        ],
    },
    {
        path: 'authorisation',
        component: AuthorisationComponent,
    }
];
