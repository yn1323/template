import React, { useRef } from 'react'
import { Box, TextFieldProps } from '@material-ui/core'
import EditTextarea from 'src/component/molecule/EditTextarea'
import { useTranslation } from 'react-i18next'

export const Top = () => {
  const { t } = useTranslation()
  const title: any = useRef<TextFieldProps>(null)
  return (
    <Box height="1">
      TOPPPP
      <span>{t('テスト')}</span>
      <EditTextarea title="手順" inputRef={title} />
    </Box>
  )
}

export default Top
