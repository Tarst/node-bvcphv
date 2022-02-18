import {IComment} from "../interfaces/comment.interface";

export const CommentsMock: IComment[] = [
  {
    id: 1,
    date_time: new Date(),
    author_name: 'Ivan',
    body: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
  },
  {
    id: 2,
    date_time: new Date(),
    author_name: 'Ivan',
    parent_id: 1,
    body: 'В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.',
  },
  {
    id: 3,
    date_time: new Date(),
    author_name: 'Ivan',
    parent_id: 1,
    body: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
  },
  {
    id: 4,
    date_time: new Date(),
    author_name: 'Ivan',
    parent_id: 3,
    body: 'Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.',
  },
  {
    id: 5,
    date_time: new Date(),
    author_name: 'Ivan',
    parent_id: 3,
    body: 'Фейк',
  }
]
