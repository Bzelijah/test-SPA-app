export interface IInitState {
  users: any[];
  posts: any[];
};

const initState: IInitState = {
  users: [
    {
      fullName: 'Igor',
      username: 'Igrik',
      city: 'Moscow',
      company: 'Yahoo',
    },
    {
      fullName: 'Mark',
      username: 'Cat',
      city: 'Moscow',
      company: 'Yandex',
    },
    {
      fullName: 'Valery',
      username: 'Dog',
      city: 'Vladivostok',
      company: 'Kaspersky',
    },
    {
      fullName: 'Nastya',
      username: 'Feya',
      city: 'Samara',
      company: 'Brr',
    }
  ],
  posts: []
}

export default initState;
