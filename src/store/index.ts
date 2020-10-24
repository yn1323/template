import {
  configureStore,
  getDefaultMiddleware,
  EnhancedStore,
} from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import logger from 'redux-logger'

import sample from 'src/store/sample'

const rootReducer = combineReducers({
  sample,
})

export const setupStore = (): EnhancedStore => {
  const middlewares = [...getDefaultMiddleware()]

  // only development
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger)
  }

  return configureStore({
  reducer: rootReducer,
    middleware: middlewares,
    devTools: true,
  })
}

// typeで使用
export * from 'src/store/sample'
