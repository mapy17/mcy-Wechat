import { AttentionUserComponent } from './attention-user/attention-user.component';
import { AttentionComponent } from './attention.component';

export const AttentionRoutes = [{
    path: '',
    component: AttentionComponent,
    children: [
        { path: '', redirectTo: 'user', pathMatch: 'full' },
        { path: 'user', component: AttentionUserComponent }
    ]
}];