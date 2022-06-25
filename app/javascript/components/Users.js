import React from "react"
import PropTypes from "prop-types"
import A_Delete_Button from "./A_Delete_Button";
import A_Edit_Button from "./A_Edit_Button";

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
              <td className="cell-center">{user.isadmin ? '✅' : ''}</td>
              <td className="cell-center"></td>
              <td className="cell-center"></td>
              <td className="cell-center"></td>
              <td className="cell-right">
                {this.props.current_user === user.id ?
                <A_Edit_Button
                onClick={() => location.href = `http://127.0.0.1:3000/users/edit`}/>
                : <a></a>}
               <a 
                  data-confirm="Are you sure?" 
                  rel="nofollow" 
                  data-method="delete" 
                  style={{ marginLeft: '10px'}}
                  href={`http://127.0.0.1:3000/users/${user.id}`}>
              <A_Delete_Button />
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

