import React from "react"
import PropTypes from "prop-types"
class A_Button extends React.Component {
  render () {
    return (
      <React.Fragment>
         <button className="button-styled"
          onClick={() => location.href = `http://127.0.0.1:3000/${this.props.base}/new`} >
         {this.props.text}
          </button>
      </React.Fragment>
    );
  }
}

export default A_Button
