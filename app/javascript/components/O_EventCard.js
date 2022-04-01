import React from "react"
import PropTypes from "prop-types"
import A_Tag from "./A_Tag";
class O_EventCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: [
        '#3A4C7B',
        '#B35B58',
        '#644165',
        '#416552'
      ]
    }
  }
  render () {
    return (
      <React.Fragment>
        <div className="event-card-styled"
          onClick={() => location.href = `http://127.0.0.1:3000/events/${this.props.event.id}`}>
          <div className="event-card-top">
          <div className="event-card-top-items">
            <h2>{this.props.event.metro}</h2> 
            <p>{this.props.gos != 0 ? `${this.props.gos} участников` : 'Нет участников'}</p>
          </div>
            {this.props.category === 'Все' ? null : <A_Tag text={this.props.category}
                                                          color='#F7C96E'
                                                          backgroundColor="transparent"
                                                          borderColor='#F7C96E' />}
           </div>
           <div className="event-card-bottom">
            <h1 style={{ backgroundColor: this.state.color[Math.floor(Math.random() * 4)]}}>{this.props.event.time}</h1>
            <p>{this.props.event.name}</p>
          </div>
          </div>
      </React.Fragment>
    );
  }
}

export default O_EventCard
