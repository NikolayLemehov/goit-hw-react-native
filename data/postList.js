const postList = [
  {
    id: '0',
    title: 'Ліс',
    messageCount: 0,
    likeCount: 10,
    imgUrl: require('../assets/images/posts/img01.jpg'),
    location: 'Ukraine',
  },
  {
    id: '1',
    title: 'Захід сонця на Чорному морі',
    messageCount: 9,
    likeCount: 255,
    imgUrl: require('../assets/images/posts/img02.jpg'),
    location: 'Ukraine',
  },
  {
    id: '2',
    title: 'Старий дім у Вінеції',
    messageCount: 1,
    likeCount: 0,
    imgUrl: require('../assets/images/posts/img03.jpg'),
    location: 'Ukraine',
  },
];

postList.splice(3);

export {postList};