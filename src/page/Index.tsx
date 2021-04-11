import React, { Suspense } from 'react'
import Route from 'src/route'

import { Box, makeStyles } from '@material-ui/core'

import Spinner from 'src/component/molecule/CenterSpinner'
import NavigationTop from 'src/component/template/NavigationTop'
import NavigationBottom from 'src/component/template/NavigationBottom'
import DialogTemplate from 'src/component/template/Dialog'
import LoadingOverlay from 'src/component/organism/Backdrop'
import Snackbar from 'src/component/organism/Snackbar'
import { useCommonStyles } from 'src/constant'

// export default () => JSX では、fast refreshが効かないことがある

const useStyles = makeStyles({
  wrapper: {
    height: `calc(100% - 64px - 16px)`,
  },
})

export const Index = () => {
  // buildすると、なぜかRoute内にpyが付与されるので、分岐を追加
  // アプリケーションに応じて要調整
  const padding = 7
  const commonClasses = useCommonStyles()
  const classes = useStyles()

  return (
    <Box className={classes.wrapper}>
      <NavigationTop />
      <Box b={1} height="1">
        <Suspense fallback={<Spinner />}>
          <Route />
        </Suspense>
      </Box>
      <NavigationBottom />
      <DialogTemplate />
      <LoadingOverlay />
      <Snackbar />
    </Box>
  )
}

export default Index
