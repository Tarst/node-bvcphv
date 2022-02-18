import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {IComment} from "../../interfaces/comment.interface";
import {CommentsMock} from "../../entites/mock";

@Injectable({
  providedIn: 'root'
})
export class CommentApiService {

  constructor(private http: HttpClient) { }

  public getComments(): Observable<IComment[]> {
    // return this.http.get<IComment[]>(URL);
    return of(CommentsMock);
  }
}
