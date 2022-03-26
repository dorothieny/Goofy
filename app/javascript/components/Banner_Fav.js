import React from "react"
import PropTypes from "prop-types"
class Banner_Fav extends React.Component {
  render () {
    return (
      <React.Fragment>
         <div className="banner" style={{ backgroundColor: this.props.color, backgroundImage: `url(${this.props.image})`}}>
           <h1>{this.props.text}</h1>
            <p>15  мест</p>
           </div>
      </React.Fragment>
    );
  }
}

export default Banner_Fav
