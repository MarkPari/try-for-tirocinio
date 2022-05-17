import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  
  constructor(private auth: AuthService, private translate: TranslateService, private route: Router,
    private cookieService: CookieService) { }

  isLogged: boolean = false; 
  username: string|null = "";

  ngOnInit(): void {
    this.auth.getToken() && this.auth.isLogged$.next(true);
    this.auth.isLogged$.subscribe(log => this.isLogged=log);
    this.auth.myLoggedUsername.subscribe(username => this.username=username);
    console.log("username", this.auth.myLoggedUsername)
    this.username = this.auth.getUsername();
    //this.username = this.cookieService.get('name');
  }

  ngOnDestroy(): void {
    this.auth.isLogged$.unsubscribe();
  }

  logout = () => {
    this.auth.removeToken();
    
    //this.cookieService.delete('name');
    this.route.navigate(['Login']);
  };

  useLanguage = (language: string) => this.translate.use(language);

}
