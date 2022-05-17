import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { MoviedbService } from './services/moviedb.service';
import { MoviesResolverService } from './services/movieDb.resolver.services';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { SinglePageComponent } from './components/single-page/single-page.component';
import { BackbuttonGuard } from './guards/backbutton.guard';

const routes: Routes = [{
  path: 'Home',
  component: HomeComponent,
  resolve: {
    myMovies: MoviesResolverService
  }
},{
  path: 'Home/:id',
  component: SinglePageComponent
},{
  path: 'Favourites',
  component: FavouritesComponent,
  canActivate: [AuthGuard]
},{
  path: 'Login',
  //component: LoginComponent,
  canActivate: [BackbuttonGuard],
  loadChildren: ()=>import('./components/login/login.module').then(m => {
    console.log("caricato");
    return m.LoginModule; }) 
}, {
  path: '',
  redirectTo: 'Home',
  pathMatch: 'full',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
