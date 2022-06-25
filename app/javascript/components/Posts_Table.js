import React from "react"
import PropTypes from "prop-types"
import M_Filter from "./M_Filter";
import A_Delete_Button from "./A_Delete_Button";
import A_Edit_Button from "./A_Edit_Button";
class Posts_Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = []
  }   
  render () {
    return (
      <React.Fragment>
        <table className="table_admin">
        <thead>
            <tr>
              <th className="cell-left">ID</th>
              <th className="cell-left">Название</th>
              <th className="cell-center">Уровень</th>
              <th className="cell-left">Описание</th>
              <th className="cell-center">Видео</th>
              <th className="cell-center">Снаряжение</th>
              <th className="cell-center">Гифка</th>
              <th className="cell-center">Действия</th>
          </tr>
          </thead>
          <tbody>
            {this.props.posts.map(post => (
             <tr key={post.title} 
                  className="table-admin-row">
              <td className="cell-left">#{post.id}</td>
              <td className="cell-left cell-title"
              onClick={() => location.href = `http://127.0.0.1:3000/posts/${post.id}`}>{post.title}</td>
              <td className="cell-center" >{this.props.categories.filter(category => post.category_id === category.id)[0].name}</td>
              <td className="cell-left" style={{ width: '500px'}}>{post.description}</td>
              <td className="cell-center">{post.content !== "" ? '✅' : '❌'}</td>
              <td className="cell-center">{post.equipment}</td>
              <td className="cell-center">{post.image? '✅' : '❌'}</td>
              <td className="cell-center">
                <A_Edit_Button
                onClick={() => location.href = `http://127.0.0.1:3000/posts/${post.id}/edit`}/>
               <a 
                  data-confirm="Are you sure?" 
                  style={{ marginLeft: '10px' }} 
                  rel="nofollow" 
                  data-method="delete" 
                  href={`http://127.0.0.1:3000/posts/${post.id}`}>
                <A_Delete_Button />
                </a>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Posts_Table;