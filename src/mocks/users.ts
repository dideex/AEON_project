import { IUserPreview } from '../types'

export const batman: IUserPreview = {
  id: 'x0002',
  username: 'batman@gothem.com',
  firstname: 'Bruce',
  lastname: 'Wayne',
  avatar: '/image/avatar/batman.jpg',
  city: 'Gotham',
  about: 'This city needs a new hero',
  age: 80,
  isOnline: true,
}

export const spinderman: IUserPreview = {
  id: 'x0003',
  username: 'pspidy@nyc.com',
  firstname: 'Peter',
  lastname: 'Parker',
  avatar: '/image/avatar/spiderman.jpg',
  city: 'New-York',
  about: 'With great power comes great responsibility',
  age: 59,
  isOnline: true,
}

export const superman: IUserPreview = {
  id: 'x0004',
  username: 'superman@nyc.com',
  firstname: 'Clark',
  lastname: 'Kent',
  avatar: '/image/avatar/superman.jpg',
  city: 'New-York',
  about: 'My sin? - salvation of the world',
  age: 79,
  isOnline: true,
}

export default { batman, spinderman, superman }
