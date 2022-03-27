import React from "react"
import PropTypes from "prop-types"
import img from '../../assets/images/A_logo.svg'
class O_SpotCard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      image: props.spot.image.url ? this.props.spot.image.url : 'https://xsaramps.com/files/uploads/conflict.png',
    }
  } 
  render () {
    return (
      <React.Fragment>
        <div 
        className="spot-card-styled"
        onClick={() => location.href = `http://127.0.0.1:3000/spots/${this.props.spot.id}`}>
          {this.props.saved[0] ? <button className="button-saved">Сохранено</button> : ''}
        <div 
        className="spot-image"
        style={{backgroundImage: `url(${this.state.image})`}} />
        
          <div className="spot-card-bottom">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' ,marginBottom: '10px'}}>
          <p>{this.props.spot.name}</p>
          <button>{this.props.type}</button>
          </div>
          <h1>{this.props.spot.metro}</h1>
          <a> 2 минуты пешком</a>
          </div>
          </div>
      </React.Fragment>
    );
  }
}

export default O_SpotCard
