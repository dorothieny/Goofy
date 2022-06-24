import React from "react"
import PropTypes from "prop-types"
import A_Button from "./A_Button";
import A_Edit_Button from "./A_Edit_Button";
import A_Delete_Button from "./A_Delete_Button";
class Types_Table extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="" style= {{ margin: '110px 0' }}>
        <div 
        className="attention-notice"
        style= {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <p>Двух типов спотов было достаточно  на момент создания 
          <br/>Редактируйте по мере необходимости</p>
          <A_Button text="Добавить тип +" base="types"/>
          </div>  
        <table className="table_admin">
        <thead>
            <tr>
              <th className="cell-left">ID</th>
              <th className="cell-center">Уровень</th>
              <th className="cell-left">Описание</th>
              <th className="cell-left"></th>
              <th className="cell-center"></th>
              <th className="cell-center"></th>
              <th className="cell-center"></th>
              <th className="cell-center">Действия</th>
          </tr>
          </thead>
          <tbody>
            {this.props.types.map(type => (
             <tr key={type.id} 
                  className="table-admin-row">
              <td className="cell-left">#{type.id}</td>
              <td className="cell-center cell-title"
              // onClick={() => location.href = `http://127.0.0.1:3000/types/${type.id}`}
              >{type.name}</td>
              <td className="cell-left">{type.description}</td>
              <td className="cell-center" ></td>
              <td className="cell-center"></td>
              <td className="cell-center"></td>
              <td className="cell-center"></td>
              <td className="cell-center">
              <A_Edit_Button
                onClick={() => location.href = `http://127.0.0.1:3000/types/${type.id}/edit`} />
                <a 
                  data-confirm="Are you sure?" 
                  style={{ marginLeft: '10px' }} 
                  rel="nofollow" 
                  data-method="delete" 
                  href={`http://127.0.0.1:3000/types/${type.id}`}>
                <A_Delete_Button/>
                </a>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Types_Table
