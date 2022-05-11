import { FavouritesState, reducerFavourites } from './reducers/reducerFav';


export interface Rootstate {
    movies: FavouritesState
}

export const Store = {
    Favourites: reducerFavourites
}