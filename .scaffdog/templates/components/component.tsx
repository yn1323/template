import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { FC } from 'react'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
}

export const {{ inputs.component | pascal }}: FC<PropTypes> = ({ _css }) => {
  return <div css={_css} data-testid="name"></div>
}
const style = {}
