import {Component, ElementRef, OnInit} from '@angular/core';
import {CommentStoreService} from "../../core/services/comment/comment-store.service";
import {first} from "rxjs";
import {FormControl, FormGroup} from '@angular/forms';
import {CommentModel} from "../../core/models/comment.model";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  public comments$ = this.commentService.comments$;
  public createCommentForm!: FormGroup;
  public myName: string = 'Insaf';
  public isFormVisible: boolean = false;
  public selectedCommentId: number = 0;
  public newId: number = 0;

  constructor(private commentService: CommentStoreService) { }

  ngOnInit(): void {
    let keys = Object.keys(localStorage);
    const arr: CommentModel[] = [];
    this.createForm();
    this.commentService.getComments()
      .pipe(first())
      .subscribe(
        () => {
          for(let key of keys) {
            arr.push({
              id: +key,
              parentId: 1,
              dateTime: new Date(),
              authorName: this.myName,
              body: localStorage.getItem(key)!,
            })
          }
          this.commentService.setComments(arr);
        }
      );
  }

  private createForm() {
    this.createCommentForm = new FormGroup({
      message: new FormControl(null),
    })
  }

  public onAnswerComment(id: number = 0, length: number = 0) {
    this.selectedCommentId = id;
    this.newId = ++length;
    this.isFormVisible = true;
    setTimeout((() => {
      const el = document.getElementById('form');
      el?.scrollIntoView();
    }), 500);
  }

  public onSubmit() {
    const message = this.createCommentForm.get('message')?.value;
    const value: CommentModel = new CommentModel({
      id: this.newId,
      parent_id: this.selectedCommentId,
      date_time: new Date(),
      author_name: this.myName,
      body: message,
    });

    this.createCommentForm.reset();
    this.commentService.setComments([value]);
    localStorage[`${this.newId}`] = message;
    this.isFormVisible = false;
  }
}
