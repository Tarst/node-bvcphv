import {IComment} from "../interfaces/comment.interface";

export class CommentModel {
  public readonly id: number;
  public readonly parentId?: number;
  public readonly dateTime: Date;
  public readonly authorName: string;
  public readonly body?: string;

  constructor(comment: IComment) {
    this.id = comment.id;
    this.parentId = comment.parent_id;
    this.dateTime = comment.date_time;
    this.authorName = comment.author_name;
    this.body = comment.body;
  }
}
