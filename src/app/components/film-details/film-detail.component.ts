import {Component, EventEmitter, Output} from '@angular/core';
import {Movie} from "../../model/movie";
import {ActivatedRoute} from "@angular/router";
import {MoviesService} from "../../service/movies-service";
import {HttpErrorResponse} from "@angular/common/http";
import {DbServiceService} from "../../service/db-service.service";

@Component({
  selector: 'app-film-details',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent {
  movie : any;
  comments : any
  isFavorite = false


  constructor(private router : ActivatedRoute, private moviesService : MoviesService, private dbService : DbServiceService) {
  }

  ngOnInit(): void {
    const movieId = this.router.snapshot.params['id']
    this.getMovieById(movieId);
    this.getComments(movieId);
    //Checks if movie exists in db, if not adds it
    this.dbService.movieExists(movieId).subscribe(
      exists => {
        if (exists) {
          this.getIsFavorite(movieId)
        }
        else if(!exists) {
          this.addMovie(movieId);
        }
      },
      error => {
        console.error('Error checking movie exists status:', error);
      }
    );
  }

  getIsFavorite(movieId : number) {
    this.dbService.isMovieFavorite(movieId).subscribe(
      isFavorite => {
          this.isFavorite = isFavorite



      },
      error => {
        console.error('Error checking movie favorite status:', error);
      }
    );
  }


  addMovie(movieId : number): void {
    const newMovie = {
      id: movieId,
      isFavorite: this.isFavorite
    };

    this.dbService.addMovie(newMovie).subscribe(
      addedMovie => {
      },
      error => {
        alert('Error adding movie:'+ error);
      }
    );
  }
  private getMovieById(movieId: any) {
    this.moviesService.getMovieById(movieId).subscribe(
      (response: any): void =>{
        this.movie = response;
      }, (error: HttpErrorResponse): void => {
        alert(error.message);
      }
    );
  }

  private getComments(movieId: any) {
    this.dbService.getComments(movieId).subscribe(
      (response: any): void =>{
        this.comments = response;
      }, (error: HttpErrorResponse): void => {
        alert(error.message);
      }
    );
  }

  getImage(path: string) {
    return this.moviesService.getImageUrl(path)
  }

  getStarRating(voteAverage: number): string {
    const rating = Math.round(voteAverage / 2); // Assuming a 10-point scale
    return '⭐'.repeat(rating);
  }

  onAddToFavorite(movieId : number) {
    this.dbService.updateMovieFavoriteStatus(movieId, !this.isFavorite).subscribe(
      updatedMovie => {
        console.log('Movie updated successfully:', updatedMovie);
        this.isFavorite = !this.isFavorite
      },
      error => {
        console.error('Error updating movie:', error);
      }
    );  }





}











