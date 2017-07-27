import { createStore, combineReducers } from 'redux'
import devToolsEnhancer from 'remote-redux-devtools'
import { backgroundReducer } from './../reducers/reducers'

const makeStore = (initialState = {}) => {
  const reducers = combineReducers({
    background: backgroundReducer
  })
  return createStore(reducers, initialState, devToolsEnhancer())
}

export default makeStore
