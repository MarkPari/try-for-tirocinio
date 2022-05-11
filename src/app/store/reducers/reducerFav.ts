import { Action, createReducer, on } from '@ngrx/store';
import { Movie } from 'src/app/models/movieDb';
import * as actionFav from '../actions/actionFav';

export interface FavouritesState {
    movies: Movie[]
}

const initialState: FavouritesState={movies: []}

export const reducerFavourites = createReducer(
    initialState, 
    on(actionFav.addFavourites, (state, {newMovie}) => ({movies: [...state.movies, newMovie]})),
    on(actionFav.remFavourites, (state, {id}) => ({movies: state.movies.filter(movie => movie.id!=id)}))
)