import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MoviesService} from "../../service/movies-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchText: string = '';
  @Output() onChange = new EventEmitter();

  constructor(private moviesService: MoviesService, private router : Router) {}

  ngOnInit() {
    this.searchMovies();
  }

  onSearchChange() {
    this.searchMovies();
  }

  searchMovies() {
    if (this.searchText != "")
      this.onChange.emit(this.searchText)
  }


}
