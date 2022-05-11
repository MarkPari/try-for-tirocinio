import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResolveEnd, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class SimpleInterceptorInterceptor implements HttpInterceptor {

  basicRoutes = ['/Favourites', '/Home']
  constructor(private auth: AuthService) {}


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //console.log(request.url) // fa riferimento ai servizi
    //console.log("route: ", this.router.url)  //route
    //const a = this.router.events.subscribe((data) => data)
    //this.basicRoutes.some(endopoint => this.router.url.includes(endopoint)) ? console.log(typeof a) : console.log("home")

    this.basicRoutes.some(endpoint => endpoint.includes('/Home')) && (request = request.clone({setHeaders: {token: `Bearer ${this.auth.getToken()}`}}))
    return next.handle(request);
  }
}
