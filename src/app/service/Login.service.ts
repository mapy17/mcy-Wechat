import { Observable } from 'rxjs/Rx';
import { Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class LoginService {
    constructor(private http: HttpClient) {

    }

    login(username: string, pwd: string): Observable<any> {
        const head: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        const para: HttpParams = new HttpParams().set('client_id', '2016042810007')
            .set('grant_type', 'password')
            .set('UserName', username)
            .set('Password', pwd)
       
       return Observable.from( this.http.post('token', para, { headers: head, }));
    }

    logout(): Observable<any>{
        return Observable.from(this.http.get('api/customerinfo/get?id=000000000001'));
    }
}

/* {'client_id':'2016042810007',
         'grant_type': 'password',
        'UserName': 'admin',
        'Password':'123456'}, */