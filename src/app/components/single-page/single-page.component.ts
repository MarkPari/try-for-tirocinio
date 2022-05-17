import { Component, OnInit, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import { MoviedbService } from '../../services/moviedb.service';
import { Movie } from '../../../../../server/src/models/movieDb';
import { DomSanitizer } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { ViewcontrefDirective } from 'src/app/directives/viewcontref.directive';
import { ViewcomponentComponent } from '../viewcomponent/viewcomponent.component';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.scss']
})
export class SinglePageComponent implements OnInit {
  movie: Movie|undefined;
  trailer: string = "";
  genres: Array<string> = [];

  constructor(private movieDb: MoviedbService, private sanitizer : DomSanitizer,
    private location: Location) { }

  
  ngOnInit(): void {
    this.movie = this.movieDb.getSingleMovie();
    this.movie && this.getTrailer(this.movie.id);
    this.getGenre();
  }

  getGenre = () => {
    this.movieDb.getGenders().subscribe(data => data.genres.filter(genre=> this.movie && 
    this.movie.genre_ids.filter(item=>item==genre.id && this.genres.push(genre.name))))
  }

  getTrailer = (id:number) => this.movieDb.getTrailer(id).subscribe(data=>this.trailer = 'https://www.youtube.com/embed/' +
    data
    .filter(key=>key.name.toLowerCase()
    .includes("trailer"))[0].key);

  youTube() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.trailer);
  }
  
  back = () => this.location.back();
  

}
