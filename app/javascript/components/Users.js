import React from "react"
import PropTypes from "prop-types"

class Users extends React.Component {
  render() {
    return (
    <div class="posts_page">

    <div class="flex-title_button">
    <h1 class="posts_title">
        Все пользователи
    </h1>
    </div>
        <div class="types_container_drid">
          {this.props.users.map(user => (
            <div class="type_card" key={user.id}>
               <h2>{user.username}</h2>
               <h3>ID пользователя: {user.id}</h3>
               <h3>{user.email}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Users.propTypes = {
  users: PropTypes.array
};
export default Users

