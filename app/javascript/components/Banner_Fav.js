import React from "react"
import PropTypes from "prop-types"
class Banner_Fav extends React.Component {
  render () {
    return (
      <React.Fragment>
         <div style= {{ height: '350px', background: '#B35B58', overflow: 'hidden', borderRadius: '12px', color: 'white'}}>
           Топ открытых спотов
            <p>15  мест</p>
           </div>
      </React.Fragment>
    );
  }
}

export default Banner_Fav
