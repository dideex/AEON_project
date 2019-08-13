import { IMessage, IFormattedMessage, IUserPreview } from '../types'
import users from './users'
import { stark } from './me';

const now = new Date()
const minsFromNow = (min: number): string =>
  now.setMinutes(now.getMinutes() - min).toString()

export const chatSingleMessage: IFormattedMessage = {
  id: 'x000000001',
  date: `${Date.now()}`,
  unread: false,
  isMine: false,
  body: 'Hello world',
}

export const chatSecondMessage: IFormattedMessage = {
  id: 'x000000002',
  date: `${Date.now()}`,
  unread: false,
  isMine: false,
  body:
    'You’re probably thinking, “My boyfriend said this was a superhero movie but that guy in the suit just turned that other guy into a fucking kebab!” Well, I may be super, but I’m no hero. And yeah, technically, this is a murder. But some of the best love stories start with a murder. And that’s exactly what this is, a love story. And to tell it right… I gotta take you back to long before I squeezed this ass into red spandex.',
}

const genMsg = (body: string, author: IUserPreview, mins: number): IMessage => ({
  id:
    Date.now()
      .toString()
      .slice(-9) + Math.floor(Math.random() * 100),
  date: minsFromNow(mins),
  unread: false,
  isMine: author === stark,
  body,
  author,
})

export const messageFlow: IMessage[] = [
  genMsg('What the hell happened to this planet?', users.quill, 21),
  genMsg("It's 8 degrees off its axis", users.quill, 21),
  genMsg('Gravitational pull is all over the place', users.quill, 21),

  genMsg("Yeah, we got one advantage. He's coming to us", stark, 19),
  genMsg("We'll use it. Alright, I have a plan", stark, 19),
  genMsg(
    "It's pretty simple. We draw him in, pin him down, get what we need",
    stark,
    18,
  ),
  genMsg(
    "We definitely don't want to dance with this guy, we just want the gauntlet",
    stark,
    18,
  ),

  genMsg('Are you yawning?', stark, 17),
  genMsg("In the middle of this, while I'm breaking it down?", stark, 17),
  genMsg('Did you hear what I said?', stark, 17),

  genMsg('I stopped listening after you said that we need a plan', users.drax, 16),
  genMsg("Okay, Mr. Clean's on his own page", stark, 16),

  genMsg("See, not winging it isn't really what they do", users.quill, 15),
  genMsg('What exactly is it that they do?', users.spinderman, 15),
  genMsg('Kick names, take ass', users.gamora, 15),

  genMsg('All right, just get over here, please?', stark, 14),
  genMsg('Mr. Lord, can you get your folks to circle up?', stark, 14),
  genMsg('Star-Lord is fine', users.quill, 14),

  genMsg("We've gotta coalesce", stark, 13),
  genMsg('Because if all we come at him with is a plucky attitude...', stark, 10),
  genMsg("Dude, don't call us plucky. We don't know what it means", users.quill, 10),

  genMsg(
    "All right, we're optimistic, yes. I like your plan, except it sucks",
    users.quill,
    9,
  ),
  genMsg('So let me do the plan, and that way, it might be really good', users.quill, 9),

  genMsg(
    "All right, we're optimistic, yes. I like your plan, except it sucks",
    users.quill,
    8,
  ),
  genMsg('So let me do the plan, and that way, it might be really good', users.quill, 8),

  genMsg('Tell him about the dance-off to save the Universe', users.drax, 7),
  genMsg('What dance-off?', stark, 7),

  genMsg("It's not a, it's not a...", users.quill, 6),
  genMsg('Like in Footloose? The movie?', users.spinderman, 6),
  genMsg(
    'Exactly like Footloose! Is it still the greatest movie in history?',
    users.quill,
    6,
  ),
  genMsg('It never was', users.spinderman, 6),
  genMsg("We're getting no help with Flash Gordon", stark, 6),

  genMsg('Flash Gordon?', users.quill, 5),
  genMsg("By the way? That's a compliment. Don't forget", users.quill, 5),
  genMsg("I'm half-human. So that's 50% of me that's stupid", users.quill, 5),
  genMsg("And that's 100% you", users.quill, 5),
  genMsg('Your math is blowing my mind', stark, 5),

  genMsg('Excuse me?', users.gamora, 4),
  genMsg('But does your friend often do that?', users.gamora, 4),
  genMsg('Strange! You all right?', stark, 4),
  genMsg("You\re back. You're all right", stark, 4),
  genMsg('Hey, what was that?', users.spinderman, 4),

  genMsg('I went forward in time, to view alternate futures...', users.strange, 3),
  genMsg('To see all the possible outcomes of the coming conflict', users.strange, 3),

  genMsg('How many did you see? ', users.quill, 2),
  genMsg('14,000,605', users.strange, 2),
  genMsg('How many did we win?', stark, 2),

  genMsg('One', users.strange, 0),
]
