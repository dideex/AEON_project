import * as React from 'react'
import { makeStyles, Theme, Avatar, Typography } from '@material-ui/core'
import { Context, AccentButton, CustomInput } from '../../common'
import { IFile } from '../../../types'

const useStyles = makeStyles((theme: Theme) => ({
  wrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(2, 0),
  },
  bigAvatar: {
    width: '30vh',
    height: '30vh',
    cursor: 'pointer',
  },
  mediumAvatar: {
    width: '20vh',
    height: '20vh',
    cursor: 'pointer',
  },
  smallAvatar: {
    width: '10vh',
    height: '10vh',
    cursor: 'pointer',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const ChangeAvatar: React.FC = () => {
  const classes = useStyles()
  const { avatar } = React.useContext(Context).me
  const [title, setTitle] = React.useState<string>('My avatar')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(event.target.value)

  const [file, setFile] = React.useState<IFile>({ src: avatar })

  const handleSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.validity.valid && e.target.files && e.target.files.length > 0) {
      const upload = e.target.files[0]

      const reader = new FileReader()
      reader.addEventListener('load', () => {
        if (typeof reader.result === 'string') setFile({ src: reader.result, upload })
      })
      reader.readAsDataURL(upload)
    }
  }
  return (
    <>
      <Typography gutterBottom variant="h5">
        Upload new avatar:
      </Typography>
      <CustomInput
        name="title"
        value={title}
        handleChange={handleChange}
        disabled={false}
        type="text"
      />
      <div className={classes.wrap}>
        <label htmlFor="upload-file">
          <Avatar src={file.src} className={classes.bigAvatar} />
        </label>
        <label htmlFor="upload-file">
          <Avatar src={file.src} className={classes.mediumAvatar} />
        </label>
        <label htmlFor="upload-file">
          <Avatar src={file.src} className={classes.smallAvatar} />
        </label>
        <input
          id="upload-file"
          style={{ display: 'none' }}
          type="file"
          onChange={handleSelectFile}
        />
      </div>
      <AccentButton title="Save" className={classes.submit} />
    </>
  )
}

export default ChangeAvatar
