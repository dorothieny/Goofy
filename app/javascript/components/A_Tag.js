import React from "react"
import PropTypes from "prop-types"
class A_Tag extends React.Component {
  render () {
    return (
      <React.Fragment>
        <button
        style={{ color: this.props.color, backgroundColor: this.props.backgroundColor, borderColor: this.props.borderColor }}
        className="tag-button">
          {this.props.text}
        </button>
      </React.Fragment>
    );
  }
}

export default A_Tag
