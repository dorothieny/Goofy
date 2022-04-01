import React from "react"
import PropTypes from "prop-types"
import img from '../../assets/images/A_SpotImage.png'
class A_Spot_Image extends React.Component {
  constructor (props) {
    super(props),
    this.state = {
      image: props.image ? props.image : img
    }
  }
  render () {
    return (
      <React.Fragment>
       <div 
       className="wrapper-sticky"
       style={{backgroundImage: `url(${this.state.image})`}}>

        </div>
      </React.Fragment>
    );
  }
}

export default A_Spot_Image
