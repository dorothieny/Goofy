import React from "react"
import PropTypes from "prop-types"
import M_Filter from "./M_Filter";
import Posts_Table from "./Posts_Table";
import O_PostCard from './O_PostCard'
class PostsPage extends React.Component {
  render () {
    return (
      <React.Fragment>
         <div style= {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '90px 0 0' }}>
         <div style= {{ display: 'flex', flexDirection: 'row'}}>
          <M_Filter category={this.props.categories}
                      base={this.props.base}/>

          <input placeholder="Ищите себя, это важнее всего"/>
        </div>
          <button className="add_smth"
          onClick={() => location.href = `http://127.0.0.1:3000/posts/new`} >
          +
          </button>
         
        </div>  
       { this.props.current_user. isadmin ? <Posts_Table categories={this.props.categories} posts={this.props.posts}/> : 
       <div className="posts-grid">
        {this.props.posts.map(post => {
          return (
            <O_PostCard post={post} category={this.props.categories.filter(category => post.category_id === category.id)[0].name} />
          )
        })}
        </div>} 
      </React.Fragment>
    );
  }
}

export default PostsPage
