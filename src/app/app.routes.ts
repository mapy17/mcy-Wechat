import { LoginComponent } from './login/login.component';

export const appRoutes = [
	{
		path: '',
		redirectTo: 'workspace',
		pathMatch: 'full'
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'workspace',
		loadChildren: './workspace/workspace.module#WorkspaceModule'
	},
	{
		path: '**', // fallback router must in the last
		component: LoginComponent
	}
];
