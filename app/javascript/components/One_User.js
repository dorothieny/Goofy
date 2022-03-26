import React from "react"
import PropTypes from "prop-types"

class One_User extends React.Component {
  render () {
    console.log(this.props)

    return (
      <React.Fragment>
      <div className="posts_page">
      <div className="flex-title_button">
      <h1 className="posts_title">
      {this.props.user.username}
      </h1>
      {this.props.user.isadmin ? <p>admin {this.props.user.id}</p>: null}
      </div>

      <div className="users_data">
      
      <h2>{this.props.user.email}</h2>
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
      </div>
      </React.Fragment>
    );
  }
}

export default One_User
