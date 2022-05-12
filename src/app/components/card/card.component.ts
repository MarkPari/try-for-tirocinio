import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { MoviedbService } from 'src/app/services/moviedb.service';
import { addFavourites, remFavourites } from 'src/app/store/actions/actionFav';
import { selectFeatureCount } from 'src/app/store/selectors/selectorFavourites';
import { Movie } from '../../models/movieDb';
import { Rootstate } from '../../store/index';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnDestroy {
  @Input() movie: Movie|undefined;
  @Output() emitter = new EventEmitter<number>();
  favMovies: Movie[] = [];
  isFavourites: boolean = false;
  subscription: Subscription;
  constructor(private store: Store<Rootstate>, private myMoive: MoviedbService) { 
    this.subscription=  this.store.select(selectFeatureCount).subscribe(res => this.favMovies=res)
  }


  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  onClick = (id:number) => this.emitter.emit(id);

  checkFilm = (idCheck: number): boolean => this.favMovies.some(({id}) => id===idCheck);

  addFavourites = () => this.movie && this.store.dispatch(addFavourites({newMovie: this.movie}));

  removeFromFavourites = () => this.movie && this.store.dispatch(remFavourites({id: this.movie.id}));

  singleMovie = (movie:Movie) => this.myMoive.setSingleMovie(movie);
}
