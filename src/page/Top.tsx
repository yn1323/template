import React, { useRef } from 'react'
import { TextFieldProps } from '@material-ui/core'
import EditTextarea from 'src/component/molecule/EditTextarea'

export const Top = () => {
  const title: any = useRef<TextFieldProps>(null)
  return (
    <div>
      TOPPPP
      <EditTextarea title="手順" inputRef={title} />
    </div>
  )
}

export default Top
