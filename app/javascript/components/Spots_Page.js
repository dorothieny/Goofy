import React from "react"
import PropTypes from "prop-types"
import M_Filter from "./M_Filter";
import Spots_Table from "./Spots_Table";
import O_SpotCard from "./O_SpotCard";
import Banner_Fav from "./Banner_Fav";
import O_Navbar from "./O_Navbar";
import img1 from '../../assets/images/MBanner.png'
import img2 from '../../assets/images/SBanner.png'
import A_Button from "./A_Button";
import A_Input from "./A_Input";
class Spots_Page extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeFilter: 'Все',
      activeFilterID: '',
      filter: ''
    }
  }

  handleChange = (value, id) => {
    this.setState({ activeFilter: value, activeFilterID: id });
  }

  onFilterSearch = (array, filter, activeId ) => {
    if( filter === '' && activeId === '') return array;
    if ( activeId ) {
    return array.filter(item => item.type_id === activeId && item.name.toLowerCase().indexOf(filter.toLowerCase()) > -1);
    }
    return array.filter(item => item.name.toLowerCase().indexOf(filter.toLowerCase()) > -1);
  }

  onFiltering = (value) => {
    this.setState({ filter: value })
  }


  render () {
    return (
      <React.Fragment>
       {this.props.current_user?.isadmin ? null : 
       <div>
         <O_Navbar current={'spots'}/>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gridGap: '21px', marginTop: '30px'}}>
        <Banner_Fav 
          color='#3A4C7B' 
          text='Топ открытых спотов' 
          places={15}
          image={img1} 
          linkTo={this.props.current_user ? `http://127.0.0.1:3000/users/${this.props.current_user.id}` : 'http://127.0.0.1:3000/users/sign_up'}/>

        <Banner_Fav 
          color='#B35B58' 
          text='Твои сохраненные' 
          places={this.props.current_user ? this.props.saveds.filter(item => this.props.current_user.id === item.user_id).length : 'Нет'}
          image={img2} linkTo={this.props.current_user ? `http://127.0.0.1:3000/users/${this.props.current_user.id}` : 'http://127.0.0.1:3000/users/sign_up'}/>

        </div>
        </div>}


        <div style= {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '90px 0 31px' }}>
       <div style= {{ display: 'flex', flexDirection: 'row'}}>
       <M_Filter category={this.props.types}
                    activeFilter={this.state.activeFilter}
                    onChange={(value, id)=>this.handleChange(value, id)}/>
                    
        <A_Input 
          text="Ищите себя в шалашофках гуфи"
          onFiltering={(value) => this.onFiltering(value)}/>
       </div>

         <A_Button text="Создать спот +" base="spots"/>
        </div>  

        { this.props.current_user?.isadmin ? <Spots_Table types={this.props.types} spots={this.onFilterSearch(this.props.spots, this.state.filter, this.state.activeFilterID)}/> : 
        <div className="spots-grid">
        {this.onFilterSearch(this.props.spots, this.state.filter, this.state.activeFilterID).map(spot => {
          return (
            <O_SpotCard 
            spot={spot} 
            type={this.props.types.filter(type => spot.type_id === type.id)[0].name} 
            saved={this.props.saveds.filter(item => item.spot_id === spot.id && item.user_id === this.props.current_user?.id)}/>
          )
        })}
        </div>
        }
        
      </React.Fragment>
    );
  }
}

export default Spots_Page
