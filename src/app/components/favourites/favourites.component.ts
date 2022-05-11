import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Rootstate } from '../../store/index';
import { Observable } from 'rxjs';
import { Movie } from '../../models/movieDb';
import { selectFeatureCount } from 'src/app/store/selectors/selectorFavourites';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  favMovies: Observable<Movie[]>;

  constructor(private store: Store<Rootstate>) {
    this.favMovies= this.store.select(selectFeatureCount);
  }

  ngOnInit(): void {
  }


}
