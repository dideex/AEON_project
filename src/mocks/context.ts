import { action as storybookAction } from '@storybook/addon-actions'

const handleAction = (name: string) => (id: string) => storybookAction(`${name} ${id}`)

export const action = {
  handleLike: handleAction('Like '),
  handleOpenChat: handleAction('Open chat '),
  handleInviteToChat: handleAction('Invite to chat '),
  handleRemoveFromFriends: handleAction('Remove friend '),
  handleAcceptFriend: handleAction('Accept friend request '),
  handleAddToMute: handleAction('Add to mute '),
  handleUpdateProfile: storybookAction(`Submit info form`),
  handleUserPolicy: storybookAction(`Submit notification form`),
  handleUpdateAvatar: storybookAction(`Submit avatar form`),
}

export const userAction = {
  handleOpenChat: handleAction('Open chat '),
  handleInviteToChat: handleAction('Invite to chat '),
  handleRemoveFromFriends: handleAction('Remove friend '),
  handleAddToMute: handleAction('Add to mute '),
}

export const sendMessage = (id: string, body: string) =>
  storybookAction(`Send message to ${id}: ${body}`)()
