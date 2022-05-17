import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, Input } from '@angular/core';
import { movie } from 'src/app/mock/movie';
import { Movie, RootObject } from 'src/app/models/movieDb';
import { Trailer } from 'src/app/models/trailerDb';
import { MoviedbService } from 'src/app/services/moviedb.service';
import { DomSanitizer} from '@angular/platform-browser';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit  {
@ViewChild('searchRef', {static: true}) searchElementRef:ElementRef|undefined;
  myData: any;
  movies: Movie[] = [];
  currentPage: number=1;
  filterMovies: Movie[] = [];
  trailer: string = "";
  searchTitle: string = "";
  

  constructor(private movieDb: MoviedbService, private sanitizer : DomSanitizer, 
    private route: ActivatedRoute) { }
  

  ngOnInit(): void {
    //this.getMovies();
    this.getFilmResolver();
    this.ngAfterViewInit();
  }

  ngAfterViewInit = () => {
    this.searchElementRef && this.searchElementRef.nativeElement.focus() ;
  }
  
  getFilmResolver = () =>  this.movies = this.route.snapshot.data['myMovies'].results

  getMovies = () => this.movieDb.getFilms().subscribe(data => {
    
    return this.movies=data.results}) //this.movies=movie //

  getTrailer = (id:number) => this.movieDb.getTrailer(id).subscribe(data=>this.trailer = 'https://www.youtube.com/embed/' +
    data
    .filter(key=>key.name.toLowerCase()
    .includes("trailer"))[0].key);

  youTube() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.trailer);
  }

  search = (search: string) => this.filterMovies = this.movies.filter(({title}) => title.toLowerCase().includes(search.toLowerCase()));

  pagination = (page: number) => this.movieDb.getFilmId(page).subscribe(data => {
    this.currentPage=data.page;
    this.movies=data.results;
  });

  
}
