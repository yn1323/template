import { Button } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const StyledButton = styled(Button)<{ backgroundColor: string }>`
  background: ${props => props.backgroundColor};
  /* ${tw`bg-orange-500`} */
`

export interface Props {
  backgroundColor: string
  children: React.ReactNode
}

const ButtonWithBackgroundColor: React.FC<Props> = (props: Props) => {
  console.log(props)
  return (
    <StyledButton variant="contained" backgroundColor={props.backgroundColor}>
      {props.children}
    </StyledButton>
  )
}

export default ButtonWithBackgroundColor
