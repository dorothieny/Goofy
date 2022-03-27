import React from "react"
import PropTypes from "prop-types"
import M_Filter from "./M_Filter";
import Events_Table from "./Events_Table";
import O_EventCard from './O_EventCard'
import O_Navbar from "./O_Navbar";
import A_Input from "./A_Input";
import A_Button from "./A_Button";
import O_Footer from "./O_Footer";
class Events_Page extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeFilter: 'Все',
      activeFilterID: '',
      filter: '',
    }
  }

  handleChange = (value, id) => {
    this.setState({ activeFilter: value, activeFilterID: id });
  }

  onFilterSearch = (array, filter, activeId ) => {
    if( filter === '' && activeId === '') return array;
    if ( activeId ) {
    return array.filter(item => item.category_id === activeId && item.name.toLowerCase().indexOf(filter.toLowerCase()) > -1)
    }
    return array.filter(item => item.name.toLowerCase().indexOf(filter.toLowerCase()) > -1)
  }

  onFiltering = (value) => {
    this.setState({ filter: value })
  }

  render () {
    return (
      <React.Fragment>
       {this.props.current_user?.isadmin ? null : <O_Navbar current={'events'} /> }
         <div style= {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between',  margin: '90px 0 31px' }}>
       
         <div style= {{ display: 'flex', flexDirection: 'row'}}>
        <M_Filter category={this.props.categories}
                  base={this.props.base}
                  activeFilter={this.state.activeFilter}
                  onChange={(value, id)=>this.handleChange(value, id)}/>
                
        <A_Input 
          text="Ищите себя в шалашофках гуфи"
          onFiltering={(value) => this.onFiltering(value)} />

        </div>
        <A_Button text="Создать ивент +" base="events"/>
        </div>  
        { this.props.current_user?. isadmin ? <Events_Table categories={this.props.categories} events={this.onFilterSearch(this.props.events, this.state.filter, this.state.activeFilterID)}/> : 
        <div className="events-grid">
        {this.onFilterSearch(this.props.events, this.state.filter, this.state.activeFilterID).map(event => {
          return (
            <O_EventCard 
            event={event} 
            category={this.props.categories.filter(category => event.category_id === category.id)[0].name} 
            gos={this.props.gos.filter(item => event.id === item.event_id).length}/>
          )
        })}
        </div>} 
      </React.Fragment>
    );
  }
}

export default Events_Page
