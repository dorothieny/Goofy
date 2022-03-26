import React from "react"
import PropTypes from "prop-types"

class Users extends React.Component {
  
  render() {
    return (
      <table className="table_admin">
        <thead>
            <tr>
              <th className="cell-left">ID</th>
              <th className="cell-left">Имя</th>
              <th className="cell-left">E-mail</th>
              <th className="cell-center">Админ</th>
              <th className="cell-center"></th>
              <th className="cell-center"></th>
              <th className="cell-center"></th>
              <th className="cell-center"></th>
          </tr>
          </thead>
          <tbody>
          {this.props.users.map(user => (
             <tr key={user.id} 
                  className="table-admin-row">
              <td className="cell-left">#{user.id}</td>
              <td className="cell-left cell-title"
              onClick={() => location.href = `http://127.0.0.1:3000/users/${user.id}`}>{user.username}</td>
              <td className="cell-left" >{user.email}</td>
              <td className="cell-center">{user.isadmin ? 'Админ' : ''}</td>
              <td className="cell-center"></td>
              <td className="cell-center"></td>
              <td className="cell-center"></td>
              <td className="cell-right">
                {this.props.current_user === user.id ?
                <button style={{ marginRight: '10px' }}
                onClick={() => location.href = `http://127.0.0.1:3000/users/edit`}>Edit</button>
                : <a></a>}
               <a 
                  data-confirm="Are you sure?" 
                  style={{ marginRight: '10px' }} 
                  rel="nofollow" 
                  data-method="delete" 
                  href={`http://127.0.0.1:3000/users/${user.id}`}>
                Удалить
                </a>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
    );
  }
}

Users.propTypes = {
  users: PropTypes.array
};
export default Users

