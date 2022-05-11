import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { MoviedbService } from './services/moviedb.service';
import { MoviesResolverService } from './services/movieDb.resolver.services';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [{
  path: 'Home',
  component: HomeComponent,
  resolve: {
    myMovies: MoviesResolverService
  }
},{
  path: 'Favourites',
  component: FavouritesComponent,
  canActivate: [AuthGuard]
},{
  path: 'Login',
  //component: LoginComponent,
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
