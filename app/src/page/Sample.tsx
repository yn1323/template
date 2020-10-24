import React from 'react'

interface Props {
  test: string
}

const Sample = ({ test }: Props): JSX.Element => {
  return <div>{test}</div>
}

export default Sample
