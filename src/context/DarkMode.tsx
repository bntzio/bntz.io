import React from 'react'

type Action = { type: 'toggle' | 'on' | 'off' }
type Dispatch = (action: Action) => void
type State = { on: boolean }
type DarkModeProviderProps = { children: React.ReactNode }

const DarkModeStateContext = React.createContext<State | undefined>(undefined)
const DarkModeDispatchContext = React.createContext<Dispatch | undefined>(undefined)

const darkModeReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'toggle':
      return { on: !state.on }
    case 'on':
      return { on: true }
    case 'off':
      return { on: false }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
  const [state, dispatch] = React.useReducer(darkModeReducer, { on: false })

  return (
    <DarkModeStateContext.Provider value={state}>
      <DarkModeDispatchContext.Provider value={dispatch}>{children}</DarkModeDispatchContext.Provider>
    </DarkModeStateContext.Provider>
  )
}

const useDarkModeState = () => {
  const context = React.useContext(DarkModeStateContext)

  if (context === undefined) {
    throw new Error('useDarkModeState must be used within a DarkModeProvider')
  }

  return context
}

const useDarkModeDispatch = () => {
  const context = React.useContext(DarkModeDispatchContext)

  if (context === undefined) {
    throw new Error('useDarkModeDispatch must be used within a DarkModeProvider')
  }

  return context
}

export { DarkModeProvider, useDarkModeState, useDarkModeDispatch }
