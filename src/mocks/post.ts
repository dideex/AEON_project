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
  date: minsFromNow(2),
}

export const post2: IPost = {
  id: '2',
  title: "'Marvel's Spider-Man' For PS4 Has Sold Over 13 Million Units Worldwide",
  body: `As we near the first anniversary since the critically-acclaimed release of Marvel's Spider-Man, exclusively for PlayStation 4, Sony has revealed some exciting news about the game's reception!
<br /><br />
  As of July 28, Marvel's Spider-Man has sold over 13.2 million units globally. This has not been the only records the game has broken; within the first few days on the market, the game became the PS4's fastest-selling game. Other milestones include becoming highest sold game exclusively made for PS4 and the distinction of being best-selling Super Hero game of all time!
  <br /><br />
  You can pick up Marvel's Spider-Man on PS4 as well as all three chapters of the Marvel's Spider-Man: The City That Never Sleeps DLC now.
  <br /><br />
  Keep it on Marvel.com for all the latest and greatest on Marvel’s Spider-Man and the rest of the Marvel Games roster. And follow Marvel Games on Twitter for more!`,
  views: 13,
  author: users.spinderman,
  photo: '/image/post/post2.jpg',
  likes: [stark, users.ant, users.batman, users.blackWidow, users.drax],
  date: minsFromNow(5),
}

export const post3: IPost = {
  id: '3',
  title: 'The 10 Most-Read Marvel News Stories of the Week: 8-16-19',
  body: `Marvel.com has wrapped up another week of news for every type of fan out there, and we wanted to make sure you saw the top stories and features from the site the past few days!

  Below, here's a quick refresher on everything you may have missed across the world of Marvel!`,
  views: 15,
  author: users.deadpool,
  photo: '/image/post/post3.jpg',
  likes: [
    stark,
    users.ant,
    users.batman,
    users.blackWidow,
    users.drax,
    users.deadpool,
    users.daredevil,
  ],
  date: minsFromNow(11),
}

export const post4: IPost = {
  id: '4',
  title: 'Marvel Studios tops $5 billion at the global box office in 2019',
  body: `Marvel Studios has reached yet another box office milestone. The studio has earned over $5.02 billion in global receipts in 2019, with just three films. Marvel topped its previous studio-best weeks ago, but there’s an even more impressive record the company has set for itself.`,
  views: 19,
  author: stark,
  photo: '/image/post/post4.jpg',
  likes: [
    stark,
    users.ant,
    users.batman,
    users.blackWidow,
    users.drax,
    users.deadpool,
    users.daredevil,
    users.marvel,
    users.venom,
  ],
  date: minsFromNow(15),
}

export const fakePosts: IPost[] = [post1, post2, post3, post4]
