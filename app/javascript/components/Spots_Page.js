import React from "react"
import PropTypes from "prop-types"
import M_Filter from "./M_Filter";
import Spots_Table from "./Spots_Table";
import O_SpotCard from "./O_SpotCard";
import Banner_Fav from "./Banner_Fav";
import O_Navbar from "./O_Navbar";
import img1 from '../../assets/images/MBanner.png'
import img2 from '../../assets/images/SBanner.png'
class Spots_Page extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeFilter: 'Все',
      activeFilterID: '',
    }
  }

  handleChange = (value, id) => {
    this.setState({ activeFilter: value, activeFilterID: id });
  }

  render () {
    return (
      <React.Fragment>
       {this.props.current_user.isadmin ? null : 
       <div>
         <O_Navbar current={'spots'}/>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gridGap: '21px'}}>
        <Banner_Fav color='#3A4C7B' text='Топ открытых спотов' image={img1}/>
        <Banner_Fav color='#B35B58' text='Твои сохраненные' image={img2}/>
        </div>
        </div>}


        <div style= {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '90px 0 0' }}>
       <div style= {{ display: 'flex', flexDirection: 'row'}}>
       <M_Filter category={this.props.types}
                    base={this.props.base}
                    activeFilter={this.state.activeFilter}
                    onChange={(value, id)=>this.handleChange(value, id)}/>
                    <input placeholder="Ищите себя, это важнее всего"/>
       </div>
          <button className="add_smth"
          onClick={() => location.href = `http://127.0.0.1:3000/spots/new`} >
          +
          </button>

        </div>  
        { this.props.current_user. isadmin ? <Spots_Table types={this.props.types} spots={this.props.spots}/> : 
        <div className="spots-grid">
        {this.state.activeFilterID ? this.props.spots.filter(item => item.type_id === this.state.activeFilterID).map(spot => {
          return (
            <O_SpotCard 
            spot={spot} 
            type={this.props.types.filter(type => spot.type_id === type.id)[0].name} 
            saved={this.props.saveds.filter(item => item.spot_id === spot.id && item.user_id === this.props.current_user.id)}/>
          )
        }): this.props.spots.map(spot => {
          return (
            <O_SpotCard 
            spot={spot} 
            type={this.props.types.filter(type => spot.type_id === type.id)[0].name} 
            saved={this.props.saveds.filter(item => item.spot_id === spot.id && item.user_id === this.props.current_user.id)}/>
          )
        })}
        </div>
        }
        
      </React.Fragment>
    );
  }
}

export default Spots_Page
