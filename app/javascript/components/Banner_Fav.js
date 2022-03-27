import React from "react"
import PropTypes from "prop-types"
class Banner_Fav extends React.Component {
  render () {
    return (
      <React.Fragment>
         <div className="banner" 
         style={{ backgroundColor: this.props.color, backgroundImage: `url(${this.props.image})`}}
         onClick={() => location.href=`${this.props.linkTo}`}>
           <h1>{this.props.text}</h1>
            <p>{this.props.places} мест</p>
           </div>
      </React.Fragment>
    );
  }
}

export default Banner_Fav
