import React from "react"
import PropTypes from "prop-types"
class O_EventCard extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div style= {{ borderRadius: '12px', overflow: 'hidden', cursor:'pointer', backgroundColor: '#222222', color: '#F8F5F1', height: '316px' }}
        onClick={() => location.href = `http://127.0.0.1:3000/events/${this.props.event.id}`}>
          <div style= {{ }}>
          <span>{this.props.event.name}</span>
          {this.props.category === 'Все' ? null : <button>{this.props.category}</button>}
          <h1>{this.props.event.metro}</h1>
          <p>{this.props.gos != 0 ? `${this.props.gos} участников` : 'Пока никто не идет'}</p>
          </div>
          </div>
      </React.Fragment>
    );
  }
}

export default O_EventCard
