import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

import {Movie} from './movie';
import {MessageService} from '../message/message.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({

  providedIn: 'root'
})
export class MovieService {

  private moviesUrl = 'http://localhost:8080/api/movies';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {}

  getMovies(): Observable<Movie[]> {

    return this.http.get<Movie[]>(this.moviesUrl)
      .pipe(
      tap(movies => this.log('fetched movies')),
      catchError(this.handleError('getMovies', []))
      );
  }

  getMovieNo404<Data>(id: number): Observable<Movie> {

    const url = `${this.moviesUrl}/?id=${id}`;
    return this.http.get<Movie[]>(url)
      .pipe(
      map(movies => movies[0]), // returns a {0|1} element array
      tap(h => {
        const outcome = h ? `fetched` : `did not find`;
        this.log(`${outcome} movie id=${id}`);
      }),
      catchError(this.handleError<Movie>(`getMovie id=${id}`))
      );
  }



  getMovie(id: number): Observable<Movie> {

    const url = `${this.moviesUrl}/${id}`;

    return this.http.get<Movie>(url).pipe(
      tap(_ => this.log(`fetched movie id=${id}`)),
      catchError(this.handleError<Movie>(`getMovie id=${id}`))
    );
  }

  searchMovies(term: string): Observable<Movie[]> {

    if (!term.trim()) {

      return of([]);
    }
    return this.http.get<Movie[]>(`${this.moviesUrl}/?title=${term}`).pipe(

      tap(_ => this.log(`found movies matching "${term}"`)),
      catchError(this.handleError<Movie[]>('searchMovies', []))
    );
  }

  addMovie(movie: Movie): Observable<Movie> {

    return this.http.post<Movie>(this.moviesUrl, movie, httpOptions).pipe(
      tap((movie: Movie) => this.log(`added movie w/ id=${movie.id}`)),
      catchError(this.handleError<Movie>('addMovie'))
    );
  }

  deleteMovie(movie: Movie | number): Observable<Movie> {

    const id = typeof movie === 'number' ? movie : movie.id;
    const url = `${this.moviesUrl}/${id}`;

    return this.http.delete<Movie>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted movie id=${id}`)),
      catchError(this.handleError<Movie>('deleteMovie'))
    );
  }

  updateMovie(movie: Movie): Observable<any> {

    return this.http.put(this.moviesUrl, movie, httpOptions).pipe(
      tap(_ => this.log(`updated movie id=${movie.id}`)),
      catchError(this.handleError<any>('updateMovie'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {

    this.messageService.add(`MovieService: ${message}`);
  }
}
