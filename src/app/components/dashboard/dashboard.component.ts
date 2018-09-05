import {Component, OnInit} from '@angular/core';
import {Movie} from '../../services/movie/movie';
import {MovieService} from '../../services/movie/movie.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {

    this.getMovies();
  }

  getMovies(): void {

    //    this.movieService.getMovies()
    //      .subscribe(movies => this.movies = movies.slice());

    this.movieService.getMovies()
      .subscribe(movies => this.movies = movies);
  }
}
