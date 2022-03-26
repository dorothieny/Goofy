import React from "react"
import PropTypes from "prop-types"
import M_Filter from "./M_Filter";
import Events_Table from "./Events_Table";
class Events_Page extends React.Component {
  render () {
    return (
      <React.Fragment>
         <div style= {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '90px 0 0' }}>
        <M_Filter category={this.props.categories}
                  base={this.props.base}/>
          <button className="add_smth"
          onClick={() => location.href = `http://127.0.0.1:3000/events/new`} >
          +
          </button>
        </div>  
        { this.props.current_user. isadmin ? <Events_Table categories={this.props.categories} events={this.props.events}/> : null} 
      </React.Fragment>
    );
  }
}

export default Events_Page
