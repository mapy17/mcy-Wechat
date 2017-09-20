import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import { BlockUIModule } from 'primeng/primeng';
import { User } from '../models/user-model';
import { LoginService } from "../service/Login.service";

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
	public user: User = new User();
	private blocked: Boolean = false;
	private errormdg: string = '';

	constructor(public router: Router, public activatedRoute: ActivatedRoute, private loginservice: LoginService) {

	}

	ngOnInit() {

	}

	login(form) {
		this.errormdg = '';
		this.blocked = true;
		/*setTimeout(() => {
			this.blocked = false;
			//this.router.navigateByUrl('workspace');
		}, 3000);*/

		this.loginservice.login(this.user.userName, this.user.password).subscribe(data => {			
			this.blocked = false;
			this.router.navigateByUrl('workspace');
		},
		err=>{
			this.blocked = false;
			this.errormdg = err.error.error;
			console.log(err.error.error_description);
		});



	}
	forgetPwd() {
		this.loginservice.logout().subscribe(data => {
			console.log(data['createDate']);
		});
	}
}
