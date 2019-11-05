import React from 'react'

import TagsInput from '../../src'

class AutoInputTagTimeout extends React.Component {
  constructor () {
    super()
    this.state = {tags: []}
  }

  handleChange (tags) {
    this.setState({tags})
  }

  render () {
    return <TagsInput minAutoInputLength={3} autoInputTime={1000} value={this.state.tags} onChange={::this.handleChange} />
  }
}

export default AutoInputTagTimeout
