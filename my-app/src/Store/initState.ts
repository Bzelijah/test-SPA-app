export interface IInitState {
  users: Array<Object>;
  posts: Array<{
    author: string;
    title: string;
    content: string;
    authorID: string;
    id: string;
    comments: Array<string>;
  }>;
  currentPost: ICurrentPost;
  writeNewComment: boolean;
};

export interface ICurrentPost {
  title: string;
  author: string;
  content: string;
  id: string;
  comments: Array<string>;
  authorID: string;
}

const initState: IInitState = {
  users: [
    {
      firstName: 'Igor',
      lastName: 'Palkin',
      username: 'Igrik',
      city: 'Moscow',
      company: 'Yahoo',
      id: '1',
    },
    {
      firstName: 'Mark',
      lastName: 'Kopalkin',
      username: 'Cat',
      city: 'Moscow',
      company: 'Yandex',
      id: '2',
    },
    {
      firstName: 'Valery',
      lastName: 'Pesikov',
      username: 'Dog',
      city: 'Vladivostok',
      company: 'Kaspersky',
      id: '3',
    },
    {
      firstName: 'Nastya',
      lastName: 'Koskina',
      username: 'Feya',
      city: 'Samara',
      company: 'Brr',
      id: '4',
    },
  ],
  posts: [
    {
      author: 'Igrik',
      title: 'Post1',
      content: 'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontententcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentc',
      authorID: '1',
      id: '1',
      comments: ['1', '2', '3'],
    },
    {
      author: 'Nastya',
      title: 'Post1',
      content: `Post Body Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview
New Paragraph of Post Body Preview Post Body Preview Post Body Preview Post Body Preview Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Preview Po... `,
      authorID: '4',
      id: '2',
      comments: ['1', '2', '3', '4'],
    },
    {
      author: 'Igrik',
      title: 'Post2',
      content: 'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent',
      authorID: '1',
      id: '3',
      comments: ['1'],
    },
    {
      author: 'Valery',
      title: 'Post1',
      content: 'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent',
      authorID: '3',
      id: '4',
      comments: ['commentcommentcommentcommentcommentcommentcommentcommentcommentcommentcommentcommentcommentcommentcommentcommentcommentcommentcommentcommentcommentcommentcommentcommentcommentcommentcomment', '2', '3'],
    },
  ],
  currentPost: {
    title: '',
    author: '',
    content: '',
    comments: [],
    id: '',
    authorID: '',
  },
  writeNewComment: false,
}

export default initState;
