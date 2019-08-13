import { IUserPreview } from '../types'
import { me } from './me'


const batman: IUserPreview = {
  id: 'x0002',
  username: 'batman@gothem.com',
  firstname: 'Bruce',
  lastname: 'Wayne',
  avatar: '/image/avatar/batman.jpg',
  city: 'Gotham',
  about: 'This city needs a new hero',
  age: 45,
  isOnline: true,
}

const spinderman: IUserPreview = {
  id: 'x0003',
  username: 'pspidy@nyc.com',
  firstname: 'Peter',
  lastname: 'Parker',
  avatar: '/image/avatar/spiderman.jpg',
  city: 'New-York',
  about: 'With great power comes great responsibility',
  age: 21,
  isOnline: true,
}

const superman: IUserPreview = {
  id: 'x0004',
  username: 'superman@nyc.com',
  firstname: 'Clark',
  lastname: 'Kent',
  avatar: '/image/avatar/superman.jpg',
  city: 'New-York',
  about: 'My sin? - salvation of the world',
  age: 39,
  isOnline: true,
}

const wolverine: IUserPreview = {
  id: 'x0005',
  username: 'wolverine@rats.com',
  firstname: 'James',
  lastname: 'Howlett',
  patronymic: 'Logan',
  avatar: '/image/avatar/wolverine.jpg',
  city: 'Ottawa',
  about:
    'Want to take your brains out? You are welcome. Not here. I washed the floors here',
  age: 43,
  isOnline: false,
}

const captainAmerica: IUserPreview = {
  id: 'x0006',
  username: 'captain@usa.com',
  firstname: 'Steve',
  lastname: 'Rogers',
  avatar: '/image/avatar/captainAmerica.jpg',
  city: 'Brooklyn',
  about: 'When patriots become heroes',
  age: 39,
  isOnline: false,
}

const thor: IUserPreview = {
  id: 'x0007',
  username: 'tor@azghard.com',
  firstname: 'Thor',
  lastname: 'Odison',
  avatar: '/image/avatar/thor.jpg',
  city: 'Asghard',
  age: 679,
  about: 'For every minute, the future is becoming the past',
  isOnline: true,
}

const venom: IUserPreview = {
  id: 'x0008',
  username: 'ediebrook@azghard.com',
  firstname: 'Eddy',
  lastname: 'Brock',
  avatar: '/image/avatar/venom.jpg',
  city: 'New-York',
  age: 30,
  about: 'Eyes, lungs, stomach, and would have eaten, but once.',
  isOnline: false,
}

const blackWidow: IUserPreview = {
  id: 'x0009',
  username: 'bwidnow@mail.ru',
  firstname: 'Natalya',
  lastname: 'Romanova',
  patronymic: 'Ivanova',
  avatar: '/image/avatar/blackWidow.jpg',
  city: 'Stalingrad',
  age: 26,
  isOnline: false,
}

const ant: IUserPreview = {
  id: 'x0010',
  username: 'slang@gmail.com',
  firstname: 'Scott',
  lastname: 'Lang',
  avatar: '/image/avatar/ant.jpg',
  city: 'Florida',
  age: 27,
  about: "Scott, you are an animal! No, I'm an insect!",
  isOnline: true,
}

const marvel: IUserPreview = {
  id: 'x0011',
  username: 'carol@marvel.com',
  firstname: 'Carol',
  lastname: 'Danvers',
  avatar: '/image/avatar/marvel.jpg',
  city: 'Halu',
  age: 32,
  about: 'You know nothing about me',
  isOnline: false,
}

const blackPanther: IUserPreview = {
  id: 'x0012',
  username: 'king@vakanda.com',
  firstname: "T'",
  lastname: 'Challa',
  avatar: '/image/avatar/blackPanther.jpg',
  city: 'Vakanda',
  age: 28,
  about: 'Vakanda forever',
  isOnline: true,
}

const strange: IUserPreview = {
  id: 'x0013',
  username: 'drstrange@avengers.com',
  firstname: 'Vincent',
  lastname: 'Strange',
  avatar: '/image/avatar/strange.jpg',
  city: 'Philadelphy',
  age: 38,
  about: 'Beyond the brink of consciousness lies a new reality',
  isOnline: true,
}

const hulk: IUserPreview = {
  id: 'x0014',
  username: 'bigboy@nyc.com',
  firstname: 'Robert',
  lastname: 'Bruce',
  patronymic: 'Banner',
  avatar: '/image/avatar/hulk.jpg',
  city: 'New-York',
  age: 44,
  about: "It's about time to added a little bit of anger",
  isOnline: false,
}

const daredevil: IUserPreview = {
  id: 'x0015',
  username: 'mardok@mail.com',
  firstname: 'Matthew',
  lastname: 'Murdock',
  patronymic: 'Michael',
  avatar: '/image/avatar/daredevil.jpg',
  city: 'New-York',
  about: 'The man without fear',
  age: 47,
  isOnline: true,
}

const deadpool: IUserPreview = {
  id: 'x0016',
  username: 'asshole@nyc.com',
  firstname: 'Wade',
  lastname: 'Winston',
  patronymic: 'Wilson',
  avatar: '/image/avatar/deadpool.jpg',
  city: 'New-York',
  age: 33,
  about: 'With great power comes great irresponsibility',
  isOnline: true,
}

const quill: IUserPreview = {
  id: 'x0017',
  username: 'quill@galaxy.com',
  firstname: 'Peter',
  lastname: 'Quill',
  patronymic: 'Jason',
  avatar: '/image/avatar/quill.jpg',
  city: 'New-York',
  age: 43,
  about: 'Star-Lord',
  isOnline: true,
}

const drax: IUserPreview = {
  id: 'x0018',
  username: 'chak@galaxy.com',
  firstname: 'Arthur',
  lastname: 'Sampson',
  patronymic: 'Douglas',
  avatar: '/image/avatar/drax.jpg',
  city: 'Kronos',
  age: 37,
  about: 'Drax the Destroyer',
  isOnline: true,
}

const gamora: IUserPreview = {
  id: 'x0019',
  username: 'gamora@tanos.com',
  firstname: 'Gamora',
  lastname: 'Long',
  avatar: '/image/avatar/gamora.jpg',
  city: 'Kronos',
  age: 28,
  about: 'The Most Dangerous Woman in the Universe',
  isOnline: false,
}

export default {
  batman,
  spinderman,
  superman,
  wolverine,
  captainAmerica,
  thor,
  venom,
  blackWidow,
  ant,
  marvel,
  blackPanther,
  strange,
  hulk,
  daredevil,
  deadpool,
  quill,
  gamora,
  drax,
}
