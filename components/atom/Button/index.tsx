import React from 'react'
import { useLocale } from '@hooks'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Box = styled.div`
  ${tw`bg-orange-500`};
`

export interface Props {
  primary?: boolean
  backgroundColor?: string
  size?: 'small' | 'medium' | 'large'
  label: string
  onClick?: () => void
}

const Button: React.FC<Props> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
}) => {
  const { t } = useLocale()
  const baseButton = 'rounded-full font-bold'
  const sizeMode =
    size === 'small'
      ? 'py-1.5 px-4 text-xs'
      : size === 'medium'
      ? 'py-2 px-5 text-sm'
      : size === 'large'
      ? 'py-3 px-6 text-base'
      : ''
  return primary ? (
    <div>
      <button
        type="button"
        className={`text-white bg-blue-450 ${baseButton} ${sizeMode}`}
      >
        {label}
      </button>
      <Box>{t('ボタン！')}</Box>
    </div>
  ) : (
    <button
      type="button"
      className={`text-gray-600 bg-transparent shadow-inner ${baseButton} ${sizeMode}`}
      // style={{ backgroundColor }}
    >
      {label}
    </button>
  )
}

export default Button
