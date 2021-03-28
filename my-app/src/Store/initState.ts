export interface IInitState {
  users: any[];
  posts: any[];
};

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
    },
    {
      author: 'Nastya',
      title: 'Post1',
      content: `Post Body Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview
New Paragraph of Post Body Preview Post Body Preview Post Body Preview Post Body Preview Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Post Body Preview Preview Po... `,
      authorID: '4',
    },
    {
      author: 'Igrik',
      title: 'Post2',
      content: 'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent',
      authorID: '1',
    },
    {
      author: 'Valery',
      title: 'Post1',
      content: 'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent',
      authorID: '3',
    },
  ]
}

export default initState;
