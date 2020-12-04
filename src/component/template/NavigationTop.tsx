import React from 'react'
import { AppBar, Tabs, Tab } from '@material-ui/core'

import { useStyles } from 'src/constant'

export const NavigationTop = () => {
  const classes = useStyles()

  return (
    <AppBar position="static" className={classes.stickTop}>
      <Tabs value={0}>
        <Tab label="aaa" />
      </Tabs>
      {/* <Tabs
        value={value}
        onChange={(_: any, newValue: any) => {
          dispatch(makeSelected(newValue))
          setValue(newValue)
          history.push('/')
          // history.go(0)
        }}
        scrollButtons="auto"
        variant="scrollable"
      >
        {selection.map((v: SelectionState, i: number) => (
          <Tab key={i} label={v.pageName} />
        ))}
      </Tabs> */}
    </AppBar>
  )
}

export default NavigationTop
