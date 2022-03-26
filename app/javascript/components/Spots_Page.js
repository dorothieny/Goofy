import React from "react"
import PropTypes from "prop-types"
import M_Filter from "./M_Filter";
import Spots_Table from "./Spots_Table";
import O_SpotCard from "./O_SpotCard";
import Banner_Rec from "./Banner_Rec";
import Banner_Fav from "./Banner_Fav";
class Spots_Page extends React.Component {
  render () {
    console.log(this.props.current_user)
    return (
      <React.Fragment>
       {this.props.current_user.isadmin ? null : 
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gridGap: '21px'}}>
        <Banner_Rec />
        <Banner_Fav />
        </div>}

        <div style= {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '90px 0 0' }}>
       <div style= {{ display: 'flex', flexDirection: 'row'}}>
       <M_Filter category={this.props.types}
                    base={this.props.base}/>
                    <input placeholder="Ищите себя, это важнее всего"/>
       </div>
          <button className="add_smth"
          onClick={() => location.href = `http://127.0.0.1:3000/spots/new`} >
          +
          </button>

        </div>  
        { this.props.current_user. isadmin ? <Spots_Table types={this.props.types} spots={this.props.spots}/> : 
        <div className="spots-grid">
        {this.props.spots.map(spot => {
          return (
            <O_SpotCard spot={spot} type={this.props.types.filter(type => spot.type_id === type.id)[0].name} />
          )
        })}
        </div>
        }
        
      </React.Fragment>
    );
  }
}

export default Spots_Page
