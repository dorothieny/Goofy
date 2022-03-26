import React from "react"
import PropTypes from "prop-types"

class Categories_Table extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="" style= {{ margin: '90px 0' }}>
        <div style= {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}><p>Двух типов спотов было достаточно  на момент создания 
            <br/>Редактируйте по мере необходимости</p>
        <button className="add_smth"
         onClick={() => location.href = `http://127.0.0.1:3000/categories/new`} >
         +
          </button>
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
            {this.props.categories.map(category => (
             <tr key={category.id} 
                  className="table-admin-row">
              <td className="cell-left">#{category.id}</td>
              <td className="cell-center cell-title"
              onClick={() => location.href = `http://127.0.0.1:3000/categories/${category.id}`}>{category.name}</td>
              <td className="cell-left">{category.description}</td>
              <td className="cell-center" ></td>
              <td className="cell-center"></td>
              <td className="cell-center"></td>
              <td className="cell-center"></td>
              <td className="cell-center">
              <button style={{ marginRight: '10px' }}
                onClick={() => location.href = `http://127.0.0.1:3000/categories/${category.id}/edit`}>Edit</button>
                <a 
                  data-confirm="Are you sure?" 
                  style={{ marginRight: '10px' }} 
                  rel="nofollow" 
                  data-method="delete" 
                  href={`http://127.0.0.1:3000/categories/${category.id}`}>
                Удалить
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

export default Categories_Table
