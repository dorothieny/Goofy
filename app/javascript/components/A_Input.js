import React from "react"
import PropTypes from "prop-types";
import search from '../../assets/images/search.svg'
class A_Input extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="input-styled">
        <div style= {{ width: '17px', height: '18px', marginRight: '17px', backgroundImage: `url(${search}` }} />
        <input 
        placeholder={this.props.text}/>
        </div>
      </React.Fragment>
    );
  }
}

export default A_Input
