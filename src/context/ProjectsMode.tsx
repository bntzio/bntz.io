import React from 'react'

type Action = { type: 'on' | 'off' }
type Dispatch = (action: Action) => void
type State = { on: boolean }
type ProjectsModeProviderProps = { children: React.ReactNode }

const ProjectsModeStateContext = React.createContext<State | undefined>(undefined)
const ProjectsModeDispatchContext = React.createContext<Dispatch | undefined>(undefined)

const projectsModeReducer = (_state: State, action: Action) => {
  switch (action.type) {
    case 'on':
      return { on: true }
    case 'off':
      return { on: false }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const ProjectsModeProvider = ({ children }: ProjectsModeProviderProps) => {
  const [state, dispatch] = React.useReducer(projectsModeReducer, { on: false })

  return (
    <ProjectsModeStateContext.Provider value={state}>
      <ProjectsModeDispatchContext.Provider value={dispatch}>{children}</ProjectsModeDispatchContext.Provider>
    </ProjectsModeStateContext.Provider>
  )
}

const useProjectsModeState = () => {
  const context = React.useContext(ProjectsModeStateContext)

  if (context === undefined) {
    throw new Error('useProjectsModeState must be used within a ProjectsModeProvider')
  }

  return context
}

const useProjectsModeDispatch = () => {
  const context = React.useContext(ProjectsModeDispatchContext)

  if (context === undefined) {
    throw new Error('useProjectsModeDispatch must be used within a ProjectsModeProvider')
  }

  return context
}

export { ProjectsModeProvider, useProjectsModeState, useProjectsModeDispatch }
