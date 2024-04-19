import { Component, OnInit } from '@angular/core';
import { CommentService } from '../services/comment.service';
import { Comment } from '../interfaces/comment.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  commentSet: Comment[] = [];
  commentSet1: Comment[] = [{
    text: "this is the first comment",
    parent: null,
    user: {
      _id: "1",
    name: "Mike"
    },
    _id: "1"
  },{
    text: "this is the second comment",
    parent: null,
    user: {
      _id: "1",
    name: "Mike"
    },
    _id: "2"
  }]

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentService.getComments().subscribe((comment) => this.commentSet.push(comment[0]));
  }

}
