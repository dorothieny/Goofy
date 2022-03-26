import React from "react"
import PropTypes from "prop-types"
import M_Filter from "./M_Filter";
class Spots_Table extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div style= {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '90px 0 0' }}>
        <M_Filter category={this.props.types}
                    base={this.props.base}/>
          <button className="add_smth"
          onClick={() => location.href = `http://127.0.0.1:3000/spots/new`} >
          +
          </button>

        </div>  
         <table className="table_admin">
        <thead>
            <tr>
              <th className="cell-left">ID</th>
              <th className="cell-left">Название</th>
              <th className="cell-center">Тип</th>
              <th className="cell-left">Метро</th>
              <th className="cell-left">Адрес</th>
              <th className="cell-center">Прочее</th>
              <th className="cell-center">Фото</th>
              <th className="cell-center">Действия</th>
          </tr>
          </thead>
          <tbody>
            {this.props.spots.map(spot => {
            return (
             <tr key={spot.title} 
                  className="table-admin-row">
              <td className="cell-left">#{spot.id}</td>
              <td className="cell-left cell-title"
              onClick={() => location.href = `http://127.0.0.1:3000/spots/${spot.id}`}>{spot.name}</td>
              <td className="cell-center" >{this.props.types.filter(type => spot.type_id === type.id)[0].name}</td>
              <td className="cell-left">{spot.metro}</td>
              <td className="cell-left">{spot.location}</td>
              <td className="cell-center">{spot.price && spot.works ? 'есть' : 'нет'}</td>
              <td className="cell-center"><img src={spot.image} /></td>
              <td className="cell-center">
                <button style={{ marginRight: '10px' }}
                onClick={() => location.href = `http://127.0.0.1:3000/spots/${spot.id}/edit`}>Edit</button>
                 <a 
                  data-confirm="Are you sure?" 
                  style={{ marginRight: '10px' }} 
                  rel="nofollow" 
                  data-method="delete" 
                  href={`http://127.0.0.1:3000/spots/${spot.id}`}>
                Удалить
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

export default Spots_Table
