import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/do';
@Injectable()
export class NoopInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var urlreq = req.clone({ url: 'http://localhost:36860/' + req.url });;
    if (req.url != 'token') {
      urlreq = req.clone({ url: 'http://localhost:36860/' + req.url ,headers:req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('apptoken'))});
    }

    console.log(urlreq.url);
    let started = Date.now();

    return next.handle(urlreq).do(event => {
      if (event instanceof HttpResponse) {
        const elapsed = Date.now() - started;
        console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
        if(req.url == 'token')
        {
          localStorage.setItem('apptoken', event.body['access_token'])
        }
      }
    });
  }
}