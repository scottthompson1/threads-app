import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments';
import { Comment } from '../interfaces/comment.interface';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) { }

  getComments(parentId: string = ''){
    let url = `${environment.apiBaseUrl}/comments`;
    if(parentId){
      url += `?parentId=${parentId}`
    }
    let response = this.httpClient.get<Comment[]>(url);
    return response;
  }
}
