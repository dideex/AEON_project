import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import StoryRouter from 'storybook-react-router'
import { Grid, Paper } from '@material-ui/core'

import { CustomThemeProvider as ThemeProvider } from '../../service'
import { IPost } from '../../types'
import PostCmp from './post'
import PostsCmp from './posts'
import { me, post2, fakePosts } from '../../mocks'
import { ProfileAndInfo } from '../../layout'
import { MyContainer } from '../../containers'

const Post = (props: IPost) => (
  <ThemeProvider>
    <MyContainer id={me.id}>
      <Grid container spacing={2}>
        <Grid item sm={3} />
        <Grid item sm={6}>
          <Paper>
            <PostCmp {...props} />
          </Paper>
        </Grid>
      </Grid>
    </MyContainer>
  </ThemeProvider>
)

const Posts = (props: any) => (
  <ThemeProvider>
    <MyContainer id={me.id}>
      <ProfileAndInfo>
        <PostsCmp {...props} />
      </ProfileAndInfo>
    </MyContainer>
  </ThemeProvider>
)

const stories = storiesOf('Feed', module)

stories.addDecorator(withKnobs)
stories.addDecorator(StoryRouter())

stories
  .addParameters({ viewport: { defaultViewport: 'responsive' } })
  .add('Posts: Basic view', () => <Posts posts={fakePosts} />)
  .add('Posts: Mobile layout', () => <Posts posts={fakePosts} />, {
    viewport: { defaultViewport: 'iphonex' },
  })
  .add('Post: Basic view', () => <Post {...post2} />)
  .add('Post: Mobile layout', () => <Post {...post2} />, {
    viewport: { defaultViewport: 'iphonex' },
  })
