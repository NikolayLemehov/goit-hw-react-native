const postList = [
  {
    id: '0',
    title: 'Ліс',
    messageCount: 0,
    likeCount: 10,
    imgUrl: require('../assets/images/posts/img01.jpg'),
    location: 'Ukraine',
    locationData: { latitude: 49.489272606874714, longitude: 31.988322933820086 },
    comments: [
      {
        id: '0',
        text: 'Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!',
        date: '09 июня, 2020 | 08:40',
        isOwner: false,
        ownerAvatar: require('../assets/images/avatar2.png'),
      },
      {
        id: '1',
        text: 'A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.',
        date: '09 июня, 2020 | 09:14',
        isOwner: true,
        ownerAvatar: require('../assets/images/avatar.png'),
      },
      {
        id: '2',
        text: 'Thank you! That was very helpful!',
        date: '09 июня, 2020 | 09:20',
        isOwner: false,
        ownerAvatar: require('../assets/images/avatar2.png'),
      },
    ]
  },
  {
    id: '1',
    title: 'Захід сонця на Чорному морі',
    messageCount: 9,
    likeCount: 255,
    imgUrl: require('../assets/images/posts/img02.jpg'),
    location: 'Ukraine',
    locationData: { latitude: 45.255644, longitude: 30.204368 },
    comments: [
      {
        id: '0',
        text: 'Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!',
        date: '09 июня, 2020 | 08:40',
        isOwner: false,
        ownerAvatar: require('../assets/images/avatar2.png'),
      },
      {
        id: '1',
        text: 'A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.',
        date: '09 июня, 2020 | 09:14',
        isOwner: true,
        ownerAvatar: require('../assets/images/avatar.png'),
      },
      {
        id: '2',
        text: 'Thank you! That was very helpful!',
        date: '09 июня, 2020 | 09:20',
        isOwner: false,
        ownerAvatar: require('../assets/images/avatar2.png'),
      },
    ]
  },
  {
    id: '2',
    title: 'Старий дім у Вінеції',
    messageCount: 1,
    likeCount: 0,
    imgUrl: require('../assets/images/posts/img03.jpg'),
    location: 'Ukraine',
    locationData: { latitude: 45.438099, longitude: 12.324347 },
    comments: [
      {
        id: '0',
        text: 'Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!',
        date: '09 июня, 2020 | 08:40',
        isOwner: false,
        ownerAvatar: require('../assets/images/avatar2.png'),
      },
      {
        id: '1',
        text: 'A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.',
        date: '09 июня, 2020 | 09:14',
        isOwner: true,
        ownerAvatar: require('../assets/images/avatar.png'),
      },
      {
        id: '2',
        text: 'Thank you! That was very helpful!',
        date: '09 июня, 2020 | 09:20',
        isOwner: false,
        ownerAvatar: require('../assets/images/avatar2.png'),
      },
    ]
  },
];

postList.splice(3);

export {postList};
