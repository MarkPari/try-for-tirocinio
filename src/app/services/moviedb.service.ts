import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router'
import { take } from 'rxjs';
import { environment } from '../../environments/environment';
import { Movie, RootObject } from '../models/movieDb';
import { RootObjectTr, Trailer } from '../models/trailerDb';
import { Genre, RootObjectGen } from '../models/genre';
const {localServer} = environment

@Injectable({
  providedIn: 'root'
})
export class MoviedbService {

  movie: Movie|undefined;

  constructor(private http: HttpClient) { }
  
  getFilms = () => this.http.get<RootObject>(`${localServer}/movies`).pipe(take(1)); //.pipe concatena più operatori, take fa unsubscribe automatico
  //getTrailer = (id:number) => this.http.get<RootObjectTr>(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=d0e9057c846dee14124bd893b0ecdbfd&language=en-US`)
  getTrailer = (id:number) => this.http.get<Trailer[]>(`${localServer}/movies/${id}`).pipe(take(1));
  getGenders = () => this.http.get<RootObjectGen>(`${localServer}/genre`);
  setSingleMovie = (movie: Movie) => this.movie=movie;
  getSingleMovie = () => this.movie;
  
}
