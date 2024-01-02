// list-comments.component.ts
import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.css']
})
export class ListCommentsComponent {

  @Input() comments : any ;

  // Hardcoded comments for demonstration

}
