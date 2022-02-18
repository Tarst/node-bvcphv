export interface IComment {
  id: number;
  parent_id?: number;
  date_time: Date;
  author_name: string;
  body?: string;
}
