import React from "react"
import PropTypes from "prop-types"
class Banner_Rec extends React.Component {
  render () {
    return (
      <React.Fragment>
           <div style= {{ height: '350px', background: '#3A4C7B', overflow: 'hidden', borderRadius: '12px', color: 'white'}}>
           Топ открытых спотов
            <p>15  мест</p>
           </div>
      </React.Fragment>
    );
  }
}

export default Banner_Rec
