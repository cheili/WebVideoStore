import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {Movie} from '../../services/movie/movie';
import {MovieService} from '../../services/movie/movie.service';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})

export class MovieDetailComponent implements OnInit {

  @Input() movie: Movie;

  constructor(private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location) {
  }

  ngOnInit() {

    this.getMovie();
  }

  getMovie(): void {

    const id = +this.route.snapshot.paramMap.get('id');

    this.movieService.getMovie(id)
      .subscribe(movie => this.movie = movie);
  }

  goBack(): void {

    this.location.back();
  }

  save(): void {

    this.movieService.updateMovie(this.movie)
      .subscribe(() => this.goBack());
  }
}
