// デバッグ用
export const END_POINT = process.env.NODE_ENV === 'production' ? '' : ''

export const isProduction = process.env.NODE_ENV === 'production'

export const lang = process.env.REACT_APP_LANG || 'ja'
