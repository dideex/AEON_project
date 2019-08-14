import * as React from 'react'
import { makeStyles, Theme, Button, TextField } from '@material-ui/core'
import { Send } from '@material-ui/icons'

import { ChatContext } from '../common'

const useStyles = makeStyles((theme: Theme) => ({
  wrap: {
    backgroundColor: theme.color.background,
    padding: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
    color: 'white',
  },
  text: {
    width: '100%',
    resize: 'none',
    backgroundColor: 'white',
    margin: 0,
  },
  label: {
    color: theme.color.fontSecondary,
  },
  icon: {
    marginLeft: theme.spacing(2),
    fontSize: 18,
  },
}))

const ChatForm: React.FC = () => {
  const classes = useStyles()
  const { action, openChatId } = React.useContext(ChatContext)
  const [message, setMessage] = React.useState<string>('')
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)
  }
  const handleSubmit = () => {
    if (openChatId) {
      action.sendMessage(openChatId, message)
      setMessage('')
    }
  }
  return (
    <div className={classes.wrap}>
      <TextField
        label={<span className={classes.label}>Message</span>}
        multiline
        rows="4"
        className={classes.text}
        margin="normal"
        variant="outlined"
        value={message}
        onChange={handleChange}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleSubmit}
      >
        send
        <Send className={classes.icon} />
      </Button>
    </div>
  )
}

export default ChatForm
