import * as React from 'react'
import { Grid } from '@material-ui/core'

import MessageList from './chat-history'
import ChatForm from './chat-form'
import ChatHeader from './chat-header'
import ChatList from './chat-list'
import GroupChatPreview from './group-chat-preview'
import { ChatContext, Context } from '../common'
import { IChat, TMyInfo } from '../../types'
import { getFullName } from '../../utils'
import { UserContainer } from '../../containers'
import { UserProfileWidget } from '../widget'

const Chat: React.FC = () => {
  const { activeChat, chats } = React.useContext(ChatContext)
  const { me } = React.useContext(Context)
  const title = getChatTitle(activeChat)
  const url = getChatUrl(activeChat)
  const chatType = activeChat ? activeChat.type : 'private'
  const chatId = activeChat ? activeChat.id : ''
  const ChatContent = () => (
    <>
      <ChatHeader
        isOwner={isOwner(me, activeChat)}
        id={chatId}
        type={chatType}
        title={title}
        url={url}
      />
      <MessageList />
      <ChatForm />
    </>
  )
  const EmptyChat = () => <div>No chat seleced</div>
  const EmptyList = () => <div>No chat available yet</div>
  const UserProfile = ({ userId }: any) => (
    <UserContainer userId={userId}>
      <UserProfileWidget showChatBtn={false} />
    </UserContainer>
  )
  return (
    <Grid container spacing={2} justify="center">
      <Grid item xs={12} sm={3}>
        {chats ? <ChatList chats={chats} /> : <EmptyList />}
      </Grid>
      <Grid item xs={12} sm={6}>
        {activeChat ? <ChatContent /> : <EmptyChat />}
      </Grid>
      <Grid item xs={12} sm={3}>
        {activeChat && activeChat.type === 'private' ? (
          <UserProfile userId={activeChat.author.id} />
        ) : (
          <GroupChatPreview />
        )}
      </Grid>
    </Grid>
  )
}

function getChatTitle(chat: IChat | undefined): string {
  if (!chat) return ''
  switch (chat.type) {
    case 'group':
      return chat.name
    case 'private':
      return getFullName(
        chat.author.firstname,
        chat.author.lastname,
        chat.author.patronymic,
      )
    default:
      return ''
  }
}

function getChatUrl(chat: IChat | undefined): string {
  const noImage = 'no-image.png'
  if (!chat) return noImage
  switch (chat.type) {
    case 'group':
      return chat.image
    case 'private':
      return chat.author.avatar
    default:
      return noImage
  }
}

function isOwner(user: TMyInfo, chat?: IChat): boolean {
  if (!chat) return false
  if (chat.type === 'private') return true
  if (chat.owner.id === user.id) return true
  return false
}

export default Chat
