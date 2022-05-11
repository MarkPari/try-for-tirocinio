import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  
  constructor(private auth: AuthService, private translate: TranslateService, private route: Router) { }

  isLogged: boolean = false; 

  ngOnInit(): void {
    this.auth.getToken() && this.auth.isLogged$.next(true);
    this.auth.isLogged$.subscribe(log => this.isLogged=log);
  }

  ngOnDestroy(): void {
    this.auth.isLogged$.unsubscribe();
  }

  logout = () => {
    this.auth.removeToken();
    this.route.navigate(['Login']);
  };

  useLanguage = (language: string) => this.translate.use(language);

}
