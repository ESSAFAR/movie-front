import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=401ebb8f983c8472d2313c9113b60309';
  private API_TOKEN = "401ebb8f983c8472d2313c9113b60309"



  constructor(private http: HttpClient) {}

  public getMovieById(id:number): Observable<any>{
    return this.http.get<any>('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + this.API_TOKEN + '&language=fr')
  }

  getMovies() : Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getImageUrl(poster_path: string){
    return 'https://image.tmdb.org/t/p/w300' + poster_path
  }

  searchMovies(query: string): Observable<any> {
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${this.API_TOKEN}&language=fr&query=${query}&page=1`;
    return this.http.get(searchUrl);
  }


}
