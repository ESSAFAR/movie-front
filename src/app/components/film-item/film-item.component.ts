import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Movie} from "../../model/movie";


@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent{


   @Input() movie : any ;
   @Output() change : EventEmitter<string> = new EventEmitter();



   onClick(){
     this.change.emit("Clicked on movie : " + this.movie?.title);
   }




}
