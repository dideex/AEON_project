import * as React from 'react'
import { Typography } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'

export const getSkeletonUserInfo = () => (
  <>
    <Typography variant="h5" gutterBottom>
      <Skeleton height={25} />
    </Typography>
    <Skeleton height={30} />
  </>
)
