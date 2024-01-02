import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from "@angular/router";
import {PopularListFilmComponent} from "../components/popular-list-film/popular-list-film.component";
import {FilmItemComponent} from "../components/film-item/film-item.component";
import {FilmDetailComponent} from "../components/film-details/film-detail.component";
import {ListItemQueryComponent} from "../list-item-query/list-item-query.component";





  export const routes: Routes = [
    {path : 'id/:id', component : FilmDetailComponent},
    {path : 'all', component : PopularListFilmComponent },
    {path : '**', redirectTo : 'all'},
  ];



