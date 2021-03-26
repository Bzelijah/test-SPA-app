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
    },
    {
      firstName: 'Mark',
      lastName: 'Kopalkin',
      username: 'Cat',
      city: 'Moscow',
      company: 'Yandex',
    },
    {
      firstName: 'Valery',
      lastName: 'Pesikov',
      username: 'Dog',
      city: 'Vladivostok',
      company: 'Kaspersky',
    },
    {
      firstName: 'Nastya',
      lastName: 'Koskina',
      username: 'Feya',
      city: 'Samara',
      company: 'Brr',
    },
    {
      firstName: 'Igor',
      lastName: 'Palkin',
      username: 'Igrik',
      city: 'Moscow',
      company: 'Yahoo',
    },
    {
      firstName: 'Mark',
      lastName: 'Kopalkin',
      username: 'Cat',
      city: 'Moscow',
      company: 'Yandex',
    },
    {
      firstName: 'Valery',
      lastName: 'Pesikov',
      username: 'Dog',
      city: 'Vladivostok',
      company: 'Kaspersky',
    },
    {
      firstName: 'Nastya',
      lastName: 'Koskina',
      username: 'Feya',
      city: 'Samara',
      company: 'Brr',
    },
  ],
  posts: [
    {
      author: 'Igrik',
      title: 'Post1',
      content: 'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent'
    },
    {
      author: 'Nastya',
      title: 'Post1',
      content: 'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent'
    },
    {
      author: 'Igrik',
      title: 'Post2',
      content: 'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent'
    },
    {
      author: 'Valery',
      title: 'Post1',
      content: 'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent'
    },
  ]
}

export default initState;
