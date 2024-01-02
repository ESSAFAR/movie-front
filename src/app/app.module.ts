import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/nav-bar/header.component';
import { FilmItemComponent } from './components/film-item/film-item.component';
import { PopularListFilmComponent } from './components/popular-list-film/popular-list-film.component';
import { FilmDetailComponent } from './components/film-details/film-detail.component';
import {provideRouter, RouterLink, RouterOutlet} from "@angular/router";
import {routes} from "./routing/routing.module";
import { CreateCommentComponent } from './components/create-comment/create-comment.component';
import { ListCommentsComponent } from './components/list-comments/list-comments.component';
import {HttpClientModule} from "@angular/common/http";
import { CommentComponent } from './comment/comment.component';
import {FormsModule} from "@angular/forms";
import { ListItemQueryComponent } from './list-item-query/list-item-query.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilmItemComponent,
    PopularListFilmComponent,
    FilmDetailComponent,
    CreateCommentComponent,
    ListCommentsComponent,
    CommentComponent,
    ListItemQueryComponent,
  ],
    imports: [
        HttpClientModule,
        BrowserModule,
        RouterOutlet,
        RouterLink,
        FormsModule
    ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent]
})
export class AppModule { }
