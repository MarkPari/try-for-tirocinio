import { createAction, props } from '@ngrx/store';
import { Movie } from '../../models/movieDb';

export const addFavourites = createAction(
    'add',
    props<{newMovie: Movie}>()
);

export const remFavourites = createAction(
    'rem',
    props<{id: number}>()
);