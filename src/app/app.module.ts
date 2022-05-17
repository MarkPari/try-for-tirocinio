import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CardComponent } from './components/card/card.component';
import { SimpleInterceptorInterceptor } from './interceptors/simple-interceptor.interceptor';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { LoginModule } from './components/login/login.module';
import { StoreModule } from '@ngrx/store';
import {Store} from './store/index';
import { ChangeDirective } from './directives/change.directive';
import { FirstLetterPipe } from './pipes/first-letter.pipe';
import { LoaderComponent } from './components/loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { LoaderService } from './services/loader.service';
import { SinglePageComponent } from './components/single-page/single-page.component';
import { SwiperModule } from 'swiper/angular';
import { SliderComponent } from './components/slider/slider.component';
import { GraphComponent } from './components/graph/graph.component';
import { CookieService } from 'ngx-cookie-service';
import { ViewcontrefDirective } from './directives/viewcontref.directive';
import { ViewcomponentComponent } from './components/viewcomponent/viewcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FavouritesComponent,
    CardComponent,
    ChangeDirective,
    FirstLetterPipe,
    LoaderComponent,
    SinglePageComponent,
    SliderComponent,
    GraphComponent,
    ViewcontrefDirective,
    ViewcomponentComponent,
    //LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    //ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    LoginModule,
    StoreModule.forRoot(Store),
    MatProgressSpinnerModule,
    SwiperModule
  ],
  providers: [
    CookieService,
    LoaderService,{ 
    provide: HTTP_INTERCEPTORS, 
    useClass: SimpleInterceptorInterceptor, 
    multi: true 
  },{ 
    provide: HTTP_INTERCEPTORS, 
    useClass: LoaderInterceptor, 
    multi: true 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
