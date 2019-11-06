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
    return <TagsInput minInputLength={2} minAutoInputLength={2} autoInputTime={1000} value={this.state.tags} onChange={::this.handleChange} />
  }
}

export default AutoInputTagTimeout
