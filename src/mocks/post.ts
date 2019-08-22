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
  body: `As we near the first anniversary since the critically-acclaimed release of <strong>Marvel's Spider-Man</strong>, exclusively for PlayStation 4, Sony has revealed some exciting news about the game's reception!
<br /><br />
  As of July 28, Marvel's Spider-Man has sold over 13.2 million units globally. This has not been the only records the game has broken; within the first few days on the market, the game became the PS4's fastest-selling game. Other milestones include becoming highest sold game exclusively made for PS4 and the distinction of being <strong>best-selling Super Hero game of all time!</strong>
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

export const post5: IPost = {
  id: '5',
  title:
    'Marvel Studios News podcast #137 – Spider-Man no more? Marvel Studios and Sony fail to extend the Spider-Pact',
  body: `The day Marvel Cinematic Universe hoped to never see has come to pass. Spider-Man, as of right now, is out of the MCU with Marvel Studios/Disney and Sony Pictures blaming each other for their inability to agree on an extension. We recap and analyze all of the breaking news (some of which broke as we recorded) and discuss what we hope will be the next steps for each company. <br /> <br /> If you enjoy the Marvel Studios News podcast, head over to our <i>Patreon</i> for exclusive content. This week, we discuss the extended cut of <strong>Spider-Man: Far From Home</strong> and add to our Marvel/Sony reaction.`,
  views: 139,
  author: users.spinderman,
  photo: '/image/post/post5.jpg',
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
    users.strange,
  ],
  date: minsFromNow(19),
}

export const post6: IPost = {
  id: '6',
  title: '‘Avengers: Endgame’ Vudu Viewing Party prizes revealed',
  body: `The <strong>Avengers: Endgame</strong> Vudu Viewing Party takes place tonight at 6:00pm PST. Producer and Marvel Studios President Kevin Feige and executive producer Trinh Tran will take part in the virtual meet-up, but that’s not all. Vudu is giving away some <strong>fantastic prizes</strong> including a life-size Infinity Gauntlet from Hot Toys!
  <br /><br />
  The life-size Infinity Gauntlet prop replica is a stunning piece of collectible art that retails for over $900! That’s a small price to pay for perfection, but why not win one instead?
  <br /><br />
  Other prizes to be given away during the Vudu Viewing Party are copies of <strong>The Road to Avengers: Endgame</strong> art book signed by Feige and Tran, Funko Pop! figures, <strong>Avengers: Endgame</strong> LEGO sets, Avengers apparel and pins, 4K UHD TVs from Hisense, signed posters, and more!
  <br /><br />
  Opportunities to win these prizes will pop up before and during the Vudu Viewing Party. To stay up-to-date on your chances to win, RSVP on Facebook and follow @VuduFans on Twitter. Also, be sure to watch the film and tweet along during the event with #VuduViewingParty.
  <br /><br />
  <strong>Avengers: Endgame</strong> is available on digital 4K UHD now and Vudu is the best platform on which to watch the film, particularly if you have a Dolby Vision-capable television. You can secure your copy of <strong>Avengers: Endgame</strong> from Vudu here.
  <br /><br />
  Marvel Studios News will also be part of the Vudu Viewing Party and we hope to have you tweeting along with us tonight! For more information on the Vudu Viewing Party, please visit vudu.com/viewingparty. For more details on the prizes, check here.`,
  views: 139,
  author: users.blackWidow,
  photo: '/image/post/post6.jpg',
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
    users.strange,
    users.captainAmerica,
  ],
  date: minsFromNow(25),
}

export const fakePosts: IPost[] = [post1, post2, post3, post4, post5, post6]
