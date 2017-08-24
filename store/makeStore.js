import { createStore, combineReducers } from 'redux'
import devToolsEnhancer from 'remote-redux-devtools'

const makeStore = (initialState = {}) => {
  const reducers = combineReducers({})
  return createStore(reducers, initialState, devToolsEnhancer())
}

export default makeStore
