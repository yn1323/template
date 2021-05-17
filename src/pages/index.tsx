import React from 'react'
import tw from 'twin.macro'
import { Trans } from '@lingui/macro'

// or use the shorthand version
const Button = tw.button`
  bg-blue-500 hover:bg-blue-800 text-white p-2 rounded
`
const IndexPage = () => (
  <div>
    <Trans>Hi people</Trans>
    <Button>Activate</Button>
  </div>
)
export default IndexPage
