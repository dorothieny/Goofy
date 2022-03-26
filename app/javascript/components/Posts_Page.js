import React from "react"
import PropTypes from "prop-types"
import M_Filter from "./M_Filter";
import Posts_Table from "./Posts_Table";
import O_PostCard from './O_PostCard'
import O_Navbar from "./O_Navbar";
class PostsPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeFilter: 'Все',
      activeFilterID: '',
    }
  }

  handleChange = (value, id) => {
    this.setState({ activeFilter: value, activeFilterID: id });
  }

  render () {
    return (
      <React.Fragment>
       {this.props.current_user.isadmin ? null : <O_Navbar current={'posts'}/> }
         <div style= {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '90px 0 0' }}>
         <div style= {{ display: 'flex', flexDirection: 'row'}}>
          <M_Filter category={this.props.categories}
                      base={this.props.base}
                      activeFilter={this.state.activeFilter}
                      onChange={(value,id)=>this.handleChange(value ,id)}/>

          <input placeholder="Ищите себя, это важнее всего"/>
        </div>
          <button className="add_smth"
          onClick={() => location.href = `http://127.0.0.1:3000/posts/new`} >
          +
          </button>
         
        </div>  
       { this.props.current_user. isadmin ? <Posts_Table categories={this.props.categories} posts={this.props.posts}/> : 
       <div className="posts-grid">
        {this.state.activeFilterID ? this.props.posts.filter(item => item.category_id === this.state.activeFilterID).map(post => {
          return (
            <O_PostCard 
            post={post} 
            learned={this.props.favorited.filter(item => item.user_id === this.props.current_user.id)}
            favorited={this.props.favorited.filter(item => post.id === item.post_id).length}
            category={this.props.categories.filter(category => post.category_id === category.id)[0].name} />
          )
        }) :
        this.props.posts.map(post => {
          return (
            <O_PostCard 
            post={post} 
            learned={this.props.favorited.filter(item => item.user_id === this.props.current_user.id)}
            favorited={this.props.favorited.filter(item => post.id === item.post_id).length}
            category={this.props.categories.filter(category => post.category_id === category.id)[0].name} />
          )
        })}
        </div>} 
      </React.Fragment>
    );
  }
}

export default PostsPage
