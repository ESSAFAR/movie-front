import { Component } from '@angular/core';
import {MoviesService} from "../service/movies-service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-list-item-query',
  templateUrl: './list-item-query.component.html',
  styleUrls: ['./list-item-query.component.css']
})
export class ListItemQueryComponent {

  movies: any[] = [];

  constructor(private router : ActivatedRoute, private moviesService : MoviesService) {
  }

  ngOnInit(): void {
    const query = this.router.snapshot.params['query']
    this.movies = this.searchMovies(query)
  }

  searchMovies(query : string) : any {

    this.moviesService.searchMovies(query).subscribe((data: any) => {
        this.movies = data.results;
        console.log(data.results.length);
      },
      (error) => {
        // Handle errors here
        console.error('Error fetching search results:', error);
      }
    );
  }

}
