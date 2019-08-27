import { IPhoto, TMyInfo, IUserPreview, IUserProfileInfo } from '../types'
import { users } from '../mocks'
import { minsFromNow } from '../utils'

const friends: IUserPreview[] = Object.values(users).filter(
  user => user.lastname !== 'Quill',
)

const photos: IPhoto[] = [
  {
    id: '0000',
    title: 'Hungry insect in the city, call the police',
    date: '1564713854069',
    url: '/image/gallery/me_0.jpg',
    likes: [users.spinderman, users.batman, users.superman],
  },
  {
    id: '0001',
    title: 'Istambul <3',
    date: '1564213954069',
    url: '/image/gallery/me_1.jpg',
    likes: [
      users.batman,
      users.superman,
      users.blackWidow,
      users.daredevil,
      users.marvel,
    ],
  },
  {
    id: '0002',
    title: 'Hi-tech undewear',
    date: '1564713954069',
    url: '/image/gallery/me_2.jpg',
    likes: [users.superman, users.blackWidow, users.venom, users.thor],
  },
  {
    id: '0003',
    title: 'Ironman plays with ironman',
    date: '1564713959069',
    url: '/image/gallery/me_3.jpg',
    likes: [users.batman, users.daredevil, users.deadpool],
  },
  {
    id: '0004',
    title: 'Look at my red glasses',
    date: '1564713954069',
    url: '/image/gallery/me_4.jpg',
    likes: [users.ant],
  },
  {
    id: '0005',
    title: 'Peace (=',
    date: '1564213954069',
    url: '/image/gallery/me_5.jpg',
    likes: [users.superman, users.deadpool, users.hulk, users.thor],
  },
  {
    id: '0006',
    title: 'Sup?',
    date: '1551113954069',
    url: '/image/gallery/me_6.jpg',
    likes: [users.batman, users.superman, users.blackPanther, users.wolverine],
  },
  {
    id: '0007',
    title: 'Who is stronger?!',
    date: '1564740260282',
    url: '/image/gallery/me_07.jpg',
    likes: [users.batman, users.deadpool, users.venom],
  },
  {
    id: '0008',
    title: 'Chilling after Tanos ...',
    date: '1564740060282',
    url: '/image/gallery/me_08.jpg',
    likes: [
      users.batman,
      users.hulk,
      users.blackPanther,
      users.blackWidow,
      users.captainAmerica,
      users.daredevil,
      users.strange,
      users.venom,
    ],
  },
  {
    id: '0009',
    title: 'Do you know how is this ...man?!',
    date: '1564740050282',
    url: '/image/gallery/me_09.jpg',
    likes: [users.spinderman, users.captainAmerica],
  },
  {
    id: '0010',
    title: 'Look at my big cigar',
    date: '1564741291888',
    url: '/image/gallery/me_10.jpg',
    likes: [users.batman, users.spinderman, users.superman],
  },
  {
    id: '0011',
    title: 'The world is on fire',
    date: '1564741491888',
    url: '/image/gallery/me_11.jpg',
    likes: [],
  },
]

export const me: TMyInfo = {
  id: 'x000001',
  username: 'Tony@stark.com',
  firstname: 'Tony',
  lastname: 'Stark',
  city: 'New-York',
  gender: 'male',
  patronymic: 'Ironman',
  avatar: '/image/avatar/me.jpg',
  about: 'Genius, Billionaire, Playboy, Philanthropist',
  age: 66,
  registered: '1547395200000',
  isOnline: true,
  birthdate: {
    month: 2,
    year: 1963,
    day: 22,
  },
  statistic: {
    posts: 13,
    likes: 68,
  },
  socialStatistic: {
    posts: 8,
    invites: 4,
    messages: 13,
    notifications: 17,
  },
  photos,
  friends,
  ignores: [users.batman],
  policy: {
    message: 'private',
    profile: 'public',
    notifyFriendRequest: true,
    notifyNewPosts: false,
    notifyPhotoRating: true,
  },
}

export const stark: IUserPreview = {
  ...(me as IUserPreview),
}

const deadpoolPhotos: IPhoto[] = [
  {
    id: '0005',
    title: 'Pretty post with me',
    date: minsFromNow(40),
    url: '/image/gallery/p_5.jpg',
    likes: [
      users.spinderman,
      users.batman,
      users.superman,
      users.hulk,
      users.wolverine,
      users.daredevil,
    ],
  },
  {
    id: '0001',
    title: 'There is me',
    date: minsFromNow(1),
    url: '/image/gallery/p_1.jpg',
    likes: [users.spinderman, users.batman, users.superman],
  },
  {
    id: '0002',
    title: 'Oooh my...',
    date: minsFromNow(5),
    url: '/image/gallery/p_2.jpg',
    likes: [users.spinderman, users.batman, users.superman, users.gamora, users.thor],
  },
  {
    id: '0006',
    title: 'Yo!',
    date: minsFromNow(120),
    url: '/image/gallery/p_6.jpg',
    likes: Object.values(users),
  },
  {
    id: '0003',
    title: 'Where were we?',
    date: minsFromNow(8),
    url: '/image/gallery/p_3.jpg',
    likes: [users.pepper, users.venom, users.superman, users.quill],
  },
  {
    id: '0004',
    title: 'Fuck off <3',
    date: minsFromNow(20),
    url: '/image/gallery/p_4.jpg',
    likes: [users.spinderman, users.batman],
  },
]

export const fakeDeadpool: IUserProfileInfo = {
  ...users.deadpool,
  gender: 'male',
  registered: '1547395200000',
  birthdate: {
    month: 1,
    day: 31,
    year: 1989,
  },
  photos: deadpoolPhotos,
  friends: [stark, users.spinderman],
}
