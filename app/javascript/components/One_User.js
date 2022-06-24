import React from "react"
import PropTypes from "prop-types"
import img from '../../assets/images/back-user.png'
import avatar from '../../assets/images/mock-avatar.png'
import M_Filter from "./M_Filter";
import O_SpotCard from "./O_SpotCard";
import O_EventCard from "./O_EventCard";
import O_PostCard from "./O_PostCard";
import A_Edit_Button from "./A_Edit_Button";
class One_User extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      avatar: this.props.user.avatar?.url ? this.props.user.avatar.url : avatar,
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
      activeFilter: 'Мои споты',
      activeFilterID: 1,
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
          style={{ backgroundImage:`url(${this.state.avatar})`}} />
        <div className="user-name">
          <div style={{display: 'flex'}}>
            <h1>{this.props.user.username}</h1> <A_Edit_Button onClick={() => location.href = `http://127.0.0.1:3000/users/edit`}/>
          </div>
            <h2>{this.props.user.email}</h2>
        </div>
        </div>
      <p>{this.props.user.isadmin ? `admin ${this.props.user.id}`: null}</p>
      </div>


     
      <div className="users_data">
      <M_Filter     userFilter={true}
                    category={this.state.filters}
                    activeFilter={this.state.activeFilter}
                    onChange={(value, id)=>this.handleChange(value, id)}/>
      
      </div>


      <div className="user_grid">
      <div className="user_items">
       <div className="posts-grid">
      {this.state.activeFilterID === 3 ? this.props.posts.map (post => {
        return (
          <O_PostCard 
          key={post.id}
          post={post} 
          learned={this.props.favorited.filter(item => item.user_id === this.props.current_user?.id)}
          favorited={this.props.favorited.filter(item => post.id === item.post_id).length}
          category={this.props.categories.filter(category => post.category_id === category.id)[0].name} />
        );
      }): null}
      </div>
     
      </div>

      <div className="user_items">
      <div className="spots-grid">
      { this.state.activeFilterID === 1 ? this.props.spots.map (spot => {
        return (
          <O_SpotCard 
          key={spot.id}
          spot={spot} 
          type={this.props.types.filter(type => spot.type_id === type.id)[0].name} 
          saved={[{ }]} />
        );
      }) : null }
      </div>
      </div>

      <div className="user_items">
       <div className="events-grid">
      { this.state.activeFilterID === 2 ? this.props.events.map (event => {
        return (
          <O_EventCard  
          key={event.id}
          event={event} 
          category={this.props.categories.filter(category => event.category_id === category.id)[0].name} 
          gos={this.props.gos.filter(item => event.id === item.event_id).length}/>
        );
      }) : null }
      </div>
      </div>

      </div>
      </React.Fragment>
    );
  }
}

export default One_User
