import { Component, ElementRef, OnInit, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Chart, LinearScale, BarElement, BarController, CategoryScale} from 'chart.js';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movieDb';
import { Rootstate } from 'src/app/store';
import { selectFeatureCount } from 'src/app/store/selectors/selectorFavourites';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  @ViewChild('myChart', {static: true}) myChartElement:ElementRef|undefined;
  favourites: Observable<Movie[]>;
  fav: Movie[]|undefined;
  
  constructor(private store: Store<Rootstate>) { 
    Chart.register(LinearScale, BarElement, BarController, CategoryScale);
    this.favourites= this.store.select(selectFeatureCount);
  }

  ngOnInit(): void {
    this.favourites.subscribe(data=>this.fav=data)
  }
  
  ngAfterViewInit() {
    if(this.myChartElement && this.fav) {
      const myChart = new Chart(this.myChartElement.nativeElement.getContext('2d'), {
        type: 'bar',
        data: {
            labels: this.fav.map(item=>item.title),//this.favourites.map(item=>item.title),
            datasets: [{
                //label: '# of Votes',
                data: this.fav.map(item=>item.popularity),//this.favourites.map(item=>item.popularity),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
        }
      });
    }
  }

}
