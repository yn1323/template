import * as React from 'react'
import { useSelector } from 'react-redux'
import { State } from 'Store'

const NoPage = () => {
  const state = useSelector((state: State) => state)

  console.log(state)
  return <div>４０４</div>
}

export default NoPage
