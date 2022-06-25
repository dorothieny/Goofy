import React from "react"
import PropTypes from "prop-types"
import img from '../../assets/images/A_logo.svg'
import A_Saved_Btn from "./A_Saved_Btn";
import image from '../../assets/images/A_Spot_Mock.png'
class O_SpotCard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      image: this.props.spot?.image.url ? this.props.spot.image.url : image,
    }
  } 
  render () {
    return (
      <React.Fragment>
        <div 
        key={this.props.spot.id}
        className="spot-card-styled"
        onClick={() => location.href = `http://127.0.0.1:3000/spots/${this.props.spot.id}`}>
          {this.props.saved[0] ? <A_Saved_Btn fillColor={'#151921'}/> : <A_Saved_Btn fillColor={'#F8F5F1'}/>}
       <div className="container-image-filter ">
       <div 
        className="spot-image"
        style={{backgroundImage: `url(${this.props.spot?.image.url ? this.props.spot.image.url : image})`}} />
         <button>{this.props.type}</button>
        <div className="filter"></div>
       </div>
          <div className="spot-card-bottom">
          <h1>{this.props.spot.metro} | {Math.floor(Math.random() *4) + 1} мин</h1>
          <p>{this.props.spot.name}</p>
          </div>
          </div>
      </React.Fragment>
    );
  }
}

export default O_SpotCard
