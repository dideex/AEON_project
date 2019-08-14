import { IMessage, IFormattedMessage, IUserPreview, IChat } from '../types'
import users from './users'
import { stark } from './me'

const minsFromNow = (min: number): string => {
  const now = new Date()
  return now.setMinutes(now.getMinutes() - min).toString()
}

export const chatSingleMessage: IFormattedMessage = {
  id: 'x000000001',
  type: 'message',
  date: `${Date.now()}`,
  unread: false,
  isMine: false,
  author: users.deadpool,
  body: 'Hello world',
}

export const chatSecondMessage: IFormattedMessage = {
  id: 'x000000002',
  type: 'message',
  date: `${Date.now()}`,
  unread: false,
  isMine: false,
  body:
    'You’re probably thinking, “My boyfriend said this was a superhero movie but that guy in the suit just turned that other guy into a fucking kebab!” Well, I may be super, but I’m no hero. And yeah, technically, this is a murder. But some of the best love stories start with a murder. And that’s exactly what this is, a love story. And to tell it right… I gotta take you back to long before I squeezed this ass into red spandex.',
}

const genMsg = (body: string, author: IUserPreview, mins: number): IMessage => ({
  id: guidGenerator(),
  date: minsFromNow(mins),
  unread: false,
  body,
  author,
})

export const messageFlow: IMessage[] = [
  genMsg('What the hell happened to this planet?', users.quill, 3500),
  genMsg("It's 8 degrees off its axis", users.quill, 1501),
  genMsg('Gravitational pull is all over the place', users.quill, 1500),

  genMsg("Yeah, we got one advantage. He's coming to us", stark, 19),
  genMsg("We'll use it. Alright, I have a plan", stark, 19),
  genMsg("It's pretty simple. We draw him in, pin him down, get what we need", stark, 18),
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

const genGroupChat = (
  name: string,
  image: string,
  members: IUserPreview[],
  unreadMessages: number,
  id: string,
): IChat => ({
  id,
  unreadMessages,
  type: 'group',
  name,
  owner: stark,
  image,
  members,
})
const genPrivateChat = (
  author: IUserPreview,
  unreadMessages: number,
  id: string,
): IChat => ({
  id,
  unreadMessages,
  type: 'private',
  author,
})

export const fakeChatList: IChat[] = [
  genGroupChat(
    'How to defeat Thanos?',
    '/image/chat/group1.jpg',
    [stark, users.quill, users.drax, users.spinderman, users.strange, users.gamora],
    5,
    '0',
  ),
  genGroupChat(
    'Where is gamora??',
    '/image/chat/group2.jpg',
    [stark, users.quill, users.drax],
    0,
    '1',
  ),
  genPrivateChat(users.pepper, 1, '2'),
  genPrivateChat(users.blackWidow, 1, '3'),
  genPrivateChat(users.quill, 0, '4'),
  genPrivateChat(users.spinderman, 0, '5'),
  genPrivateChat(users.hulk, 0, '6'),
  genPrivateChat(users.strange, 0, '7'),
]

const groupChat2: IMessage[] = [
  genMsg("I'm gonna ask you this one time.", users.quill, 60),
  genMsg('Where is Gamora?', users.quill, 60),
  genMsg("Yeah, I'll do you one better.", stark, 60),
  genMsg('Who is Gamora', stark, 60),
  genMsg("I'll do you one better.", users.drax, 60),
  genMsg('Why is Gamora', users.drax, 60),
]

const chatWithPaper: IMessage[] = [
  genMsg('What, you got plans?', stark, 10),
  genMsg('What, you got plans?', users.pepper, 10),
  genMsg("I don't like it when you have plans", stark, 10),
  genMsg("I'm allowed to have plans on my birthday", users.pepper, 10),
  genMsg("It's your birthday?", stark, 10),
  genMsg('Yes', users.pepper, 10),
  genMsg('I knew that. Already?', stark, 5),
  genMsg("Yeah, isn't that strange? It's the same day as last year", users.pepper, 5),
  genMsg('Get yourself something nice from me', stark, 5),
  genMsg('I already did', users.pepper, 5),
  genMsg('Yeah? And?', stark, 5),
  genMsg("Oh, it's very nice... very tasteful. Thank you, Mr. Stark", users.pepper, 5),
  genMsg("You're welcome, Ms. Potts", stark, 0),
]

const chatWithNatasha: IMessage[] = [
  genMsg("I'm surprised you could keep your mouth shut.", users.blackWidow, 5),
  genMsg(
    "You're good. You are mind-blowingly duplicitous. How do you do it? You're a triple impostor, I've never seen anything like it. Is there anything real about you? Do you even speak Latin?",
    stark,
    5,
  ),
  genMsg('Fallaces sunt rerum species.', users.blackWidow, 2),
  genMsg('Which means? Wait, what did you just say?', stark, 2),
  genMsg(
    'It means you can either drive yourself home or I can have you collected.',
    users.blackWidow,
    2,
  ),
]

const chatWithQuill: IMessage[] = [
  genMsg("You're from Earth?", stark, 5),
  genMsg("I'm not from Earth, I'm from Missouri.", users.quill, 2),
  genMsg("Yeah, that's on Earth, dipshit!", stark, 2),
]

const chatWithParker: IMessage[] = [
  genMsg(
    "You just don't do anything I would do... and definitely don't do anything I wouldn't do. There's a little gray area in there and that's where you operate.",
    stark,
    5,
  ),
  genMsg("Wait, does that mean that I'm an Avenger?", users.spinderman, 2),
  genMsg('No.', stark, 2),
]

const chatWithHulk: IMessage[] = [
  genMsg("The Avengers broke up. We're toast.", stark, 5),
  genMsg('Broke up? Like a band? Like the Beatles?', users.hulk, 2),
]

const chatWithStrange: IMessage[] = [
  genMsg(
    'He has the Power and Space stones, that already makes him the strongest creature in the whole universe. If he gets his hands on all six stones, Tony...',
    users.strange,
    5,
  ),
  genMsg('He could destroy life on a scale hitherto undreamt of.', users.strange, 2),
  genMsg("Did you seriously just say 'hitherto undreamt of?'", stark, 2),
  genMsg('Are you seriously leaning on the Cauldron of the Cosmos?', users.strange, 2),
]

export const chatList: IMessage[][] = [
  messageFlow,
  groupChat2,
  chatWithPaper,
  chatWithNatasha,
  chatWithQuill,
  chatWithParker,
  chatWithHulk,
  chatWithStrange,
]

function guidGenerator() {
  const S4 = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4()
}
