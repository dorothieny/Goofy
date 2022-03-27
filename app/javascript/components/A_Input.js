import React from "react"
import PropTypes from "prop-types";
import search from '../../assets/images/search.svg'
class A_Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
     
    }
  }
  render () {
    return (
      <React.Fragment>
        <div className="input-styled">
        <div style= {{ width: '17px', height: '18px', marginRight: '17px', backgroundImage: `url(${search}` }} />
        <input 
        placeholder={this.props.text}
        onChange={(e) => {
          e.preventDefault();
          
          this.props.onFiltering(e.target.value)}}/>
        </div>
      </React.Fragment>
    );
  }
}

export default A_Input
