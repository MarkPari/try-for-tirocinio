import { createSelector, createFeatureSelector } from '@ngrx/store';
import { FavouritesState } from '../reducers/reducerFav';
import { Movie } from '../../models/movieDb';


export const selectFavourites = (state: FavouritesState) => state.movies;

export const favouritesSelector = createFeatureSelector<FavouritesState>('Favourites')

export const selectFeatureCount = createSelector(
    favouritesSelector,
    ({movies}) => movies
);