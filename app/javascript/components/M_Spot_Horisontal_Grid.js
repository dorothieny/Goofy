import React from "react"
import PropTypes from "prop-types"
import O_SpotCard from "./O_SpotCard";
class M_Spot_Horisontal_Grid extends React.Component {
  render () {
    console.log(this.props);
    return (
      <React.Fragment>
        <div className="spots-grid">
          {this.props.spots.map(spot => {
            return (
              <O_SpotCard 
                key={spot.id}
                spot={spot} 
                type={this.props.types.filter(type => spot.type_id === type.id)[0].name} 
                saved={this.props.saveds.filter(item => item.spot_id === spot.id && item.user_id === this.props.current_user?.id)}/>
            )
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default M_Spot_Horisontal_Grid
