import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { MoviedbService } from './moviedb.service';


@Injectable({
    providedIn: 'root'
})
export class MoviesResolverService implements Resolve<any> {

    constructor(private movieDb: MoviedbService) {}
    
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        //return of('Route!').pipe(delay(2000))
        return this.movieDb.getFilms();
    }
}
