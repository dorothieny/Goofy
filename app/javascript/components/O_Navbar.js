import React from "react"
import PropTypes from "prop-types"
class O_Navbar extends React.Component {
  render () {
    return (
      <React.Fragment>
       <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
       <h1 
          className="styled-navbar"
          style= {{ color: `${this.props.current === 'spots' ? `#222222` : 'transparent'}`}}
          onClick={()=> location.href='http://127.0.0.1:3000/spots'}>
            Споты</h1>
        <h1 
        className="styled-navbar"
        style= {{ color: `${this.props.current === 'events' ? `#222222` : 'transparent'}`}}
        onClick={()=> location.href='http://127.0.0.1:3000/events'}>
          Ивенты</h1>
        <h1 className="styled-navbar"
         style= {{ color: `${this.props.current === 'posts' ? `#222222` : 'transparent'}`}}
         onClick={()=> location.href='http://127.0.0.1:3000/posts'}>
           Трюки</h1>
       </div>
      </React.Fragment>
    );
  }
}

export default O_Navbar
