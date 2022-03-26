import React from "react"
import PropTypes from "prop-types"
import M_Filter from "./M_Filter";
import Events_Table from "./Events_Table";
import O_EventCard from './O_EventCard'
import O_Navbar from "./O_Navbar";
class Events_Page extends React.Component {
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
    console.log(this.props)
    return (
      <React.Fragment>
       {this.props.current_user.isadmin ? null : <O_Navbar current={'events'} /> }
         <div style= {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '90px 0 0' }}>
       
         <div style= {{ display: 'flex', flexDirection: 'row'}}>
        <M_Filter category={this.props.categories}
                  base={this.props.base}
                  activeFilter={this.state.activeFilter}
                  onChange={(value, id)=>this.handleChange(value, id)}/>
                  <input placeholder="Ищите себя, это важнее всего"/>
        </div>
          <button className="add_smth"
          onClick={() => location.href = `http://127.0.0.1:3000/events/new`} >
          +
          </button>
        </div>  
        { this.props.current_user. isadmin ? <Events_Table categories={this.props.categories} events={this.props.events}/> : 
        <div className="events-grid">
        {this.state.activeFilterID ? this.props.events.filter(item => item.category_id === this.state.activeFilterID).map(event => {
          return (
            <O_EventCard 
            event={event} 
            category={this.props.categories.filter(category => event.category_id === category.id)[0].name} 
            gos={this.props.gos.filter(item => event.id === item.event_id).length}/>
          )
        }) : this.props.events.map(event => {
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
