import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {DbServiceService} from "../../service/db-service.service";

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent {


  @Input() movieId : any ;
  commentText: string = '';
  author: string = '' ;

  constructor(private service : DbServiceService) {
  }

  onSubmit(form: any): void {
    if (form.valid) {
      alert('author' + form.value.author);
      alert('text' + form.value.commentText);
      this.service.addComment(this.movieId, {
        publisher : form.value.author,
        text : form.value.commentText,
        movieId : this.movieId
      }).subscribe(() => alert("Submitted"))
    }
  }
}
