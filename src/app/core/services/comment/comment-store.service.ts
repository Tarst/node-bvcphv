import { Injectable } from '@angular/core';
import {BehaviorSubject, defer, map, Observable, tap } from 'rxjs';
import {CommentModel} from "../../models/comment.model";
import {CommentApiService} from "./comment-api.service";
import {IComment} from "../../interfaces/comment.interface";

@Injectable({
  providedIn: 'root'
})
export class CommentStoreService {
  public comments$: Observable<CommentModel[]> = defer((): Observable<CommentModel[]> => this.comments.asObservable());
  private comments: BehaviorSubject<CommentModel[]> = new BehaviorSubject<CommentModel[]>([]);

  constructor(private api: CommentApiService) { }

  public getComments(): Observable<CommentModel[]> {
    return this.api.getComments()
      .pipe(
        map((res: IComment[]): CommentModel[] => res.map(comment => new CommentModel(comment))),
        tap(comments => this.comments.next(comments)),
      )
  }

  public setComments(value: CommentModel[]): void {
    this.comments.next([...this.comments.value, ...value])
  }
}
