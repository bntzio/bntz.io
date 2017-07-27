import React from 'react'
import { connect } from 'react-redux'

class Work extends React.Component {
  componentDidMount () {
    const body = document.querySelector('body')
    body.style.backgroundColor = this.props.backgroundColor
  }
  render () {
    return <h1>Work!!!</h1>
  }
}

export default connect(
  (state) => {
    return {
      backgroundColor: state.background
    }
  }
)(Work)
