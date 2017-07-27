export const backgroundReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_BACKGROUND_COLOR':
      if (action.backgroundColor === 'work') {
        return 'red'
      } else {
        return state
      }
    case 'BLOG':
      return 'blog'
    default:
      return state
  }
}
