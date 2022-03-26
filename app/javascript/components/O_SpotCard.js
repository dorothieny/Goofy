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
    console.log(this.props.saved)
    return (
      <React.Fragment>
        <div style= {{ borderRadius: '12px', overflow: 'hidden', cursor:'pointer' }}
        onClick={() => location.href = `http://127.0.0.1:3000/spots/${this.props.spot.id}`}>
        <div style={{ backgroundImage: `url(${this.state.image})`, backgroundPosition: 'top center', backgroundSize: 'cover', height: '194px', backgroundRepeat: 'no-repeat' }} />
          <div style= {{ backgroundColor: '#222222', color: '#F8F5F1', height: '150px' }}>
          <span>{this.props.spot.name}</span><button>{this.props.type}</button>
          <h1>{this.props.spot.metro}</h1>
         {this.props.saved[0] ? <button>Сохранено</button> : ''}
          </div>
          </div>
      </React.Fragment>
    );
  }
}

export default O_SpotCard
