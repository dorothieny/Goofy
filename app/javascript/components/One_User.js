import React from "react"
import PropTypes from "prop-types"
import img from '../../assets/images/back-user.png'
import M_Filter from "./M_Filter";
class One_User extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      filters: [
        {
          name: 'Мои споты',
          id: 1
        },
        {
         
          name: 'Мои ивенты',
          id: 2
        },
        {

          name: 'Мои трюки',
          id: 3
        }
      ],
      activeFilter: 'Все',
      activeFilterID: null,
    }
  }
  handleChange = (value, id) => {
    this.setState({ activeFilter: value, activeFilterID: id });
  }

  render () {
    return (
      <React.Fragment>
      <div className="flex-title">
        <div className='background-img-profile' style={{ backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat'}}/>
        <div style={{ display: 'flex', alignItems: 'center'}}>
          <div 
          className="user-avatar"
          style={{ backgroundImage:`url(${this.props.user.avatar.url})`}} />
        <div className="user-name">
          <h1>
            {this.props.user.username}
            </h1>
            <h2>{this.props.user.email}</h2>
        </div>
        </div>
      <p>{this.props.user.isadmin ? `admin ${this.props.user.id}`: null}</p>
      </div>


     
      <div className="users_data">
      <M_Filter   
                    category={this.state.filters}
                    activeFilter={this.state.activeFilter}
                    onChange={(value, id)=>this.handleChange(value, id)}/>
      
      </div>


      <div className="user_grid">
      <div className="user_items">
      <h2>
      Выучено {this.props.posts.length}
      </h2>
      </div>

      <div className="user_items">
      <h2>
      Сохранено {this.props.spots.length}
      </h2>
      {this.props.spots.map (spot => {
        return (
          <p
          key={spot.id}
          onClick={() => location.href=`http://127.0.0.1:3000/spots/${spot.id}`}>{spot.name}</p>
        );
      })}
      </div>

      <div className="user_items">
      <h2>
      Иду на {this.props.events.length}
      </h2>
      
      </div>

      </div>
      </React.Fragment>
    );
  }
}

export default One_User
