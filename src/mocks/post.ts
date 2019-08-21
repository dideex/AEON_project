import { IPost } from '../types'
import { stark } from './me'
import users from './users'
import { minsFromNow } from './chat'

export const post1: IPost = {
  id: '1',
  title: "The 'We Love You 3000' Tour Hits Chicago, Miami, Los Angeles, and Minneapolis",
  body:
    "The wait is over to bring home the biggest movie of all time! Marvel Studios' Avengers: Endgame is now available on Digital and Blu-ray, as of this week.",
  views: 10,
  author: stark,
  photo: '/image/post/post1.jpg',
  likes: [stark, users.ant],
  date: minsFromNow(15),
}
