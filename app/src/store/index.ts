import {combineReducers} from 'redux'
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'

import sample from 'src/store/sample'

const reducer = combineReducers({
  sample
});

// getDefaultMiddleware: serializeエラーがスマホで発生するため
const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware({serializableCheck: false}),
});

export default store;

// typeで使用
export * from 'src/store/sample'
