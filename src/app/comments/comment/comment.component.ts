import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/interfaces/comment.interface';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  isExpanded = false;
  isReplying = false;

  @Input() comment!: Comment;

  toggleExpanded = () =>  this.isExpanded = !this.isExpanded;
  toggleReplying = () =>  {
    this.isReplying = !this.isReplying;
    if(this.isReplying){
      this.isExpanded = true; 
    }
  }

  nestedCommentsEffect(){
    if (this.isExpanded){
      this.commentService.getComments(this.comment.parent!._id)
    }
  }
  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
  }

}
