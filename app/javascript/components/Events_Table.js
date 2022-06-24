import React from "react"
import PropTypes from "prop-types";
import A_Delete_Button from "./A_Delete_Button";
import A_Edit_Button from "./A_Edit_Button";
class Events_Table extends React.Component {
  render () {
    return (
      <React.Fragment>
        <table className="table_admin">
        <thead>
            <tr>
              <th className="cell-left">ID</th>
              <th className="cell-left">Название</th>
              <th className="cell-center">Уровень</th>
              <th className="cell-left">Метро</th>
              <th className="cell-left">Адрес</th>
              <th className="cell-center">Время</th>
              <th className="cell-center">Прошло</th>
              <th className="cell-center">Действия</th>
          </tr>
          </thead>
          <tbody>
            {this.props.events.map(event => {
            return (
             <tr key={event.title} 
                  className="table-admin-row">
              <td className="cell-left">#{event.id}</td>
              <td className="cell-left cell-title"
              onClick={() => location.href = `http://127.0.0.1:3000/events/${event.id}`}>{event.name}</td>
              <td className="cell-center" >{this.props.categories.filter(category => event.category_id === category.id)[0].name}</td>
              <td className="cell-left">{event.metro}</td>
              <td className="cell-left">{event.location}</td>
              <td className="cell-center">{event.time}</td>
              <td className="cell-center">✅</td>
              <td className="cell-center">
                <A_Edit_Button
                onClick={() => location.href = `http://127.0.0.1:3000/events/${event.id}/edit`}/>
               <a 
                  data-confirm="Are you sure?" 
                  style={{ marginLeft: '10px' }} 
                  rel="nofollow" 
                  data-method="delete" 
                  href={`http://127.0.0.1:3000/events/${event.id}`}>
                <A_Delete_Button />
                </a>  
              </td>
            </tr>
          )})}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Events_Table
