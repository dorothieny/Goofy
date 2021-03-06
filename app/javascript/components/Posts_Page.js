import React from "react"
import PropTypes from "prop-types"
import M_Filter from "./M_Filter";
import Posts_Table from "./Posts_Table";
import O_PostCard from './O_PostCard'
import O_Navbar from "./O_Navbar";
import A_Input from "./A_Input";
import A_Button from "./A_Button";

class PostsPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      activeFilter: 'Все',
      activeFilterID: '',
      filter: ''
    }
  }

  handleChange = (value, id) => {
    this.setState({ activeFilter: value, activeFilterID: id });
  }

  onFilterSearch = (array, filter, activeId ) => {
    if( filter === '' && activeId === '') return array;
    if ( activeId ) {
    return array.filter(item => item.category_id === activeId && item.title.toLowerCase().indexOf(filter.toLowerCase()) > -1)
    }
    return array.filter(item => item.title.toLowerCase().indexOf(filter.toLowerCase()) > -1)
  }

  onFiltering = (value) => {
    this.setState({ filter: value })
  }

  render () {
    console.log(this.state.activeFilterID)
    return (
      <React.Fragment>
       {this.props.current_user?.isadmin ? null : <O_Navbar current={'posts'}/> }
         <div style= {{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '90px 0 30px' }}>
         <div style= {{ display: 'flex', flexDirection: 'row'}}>
          <M_Filter category={this.props.categories}
                      base={this.props.base}
                      activeFilter={this.state.activeFilter}
                      onChange={(value,id)=>this.handleChange(value ,id)}/>

         <A_Input 
         text="Ищи трюк по названию"
         onFiltering={(value) => this.onFiltering(value)}/>
        
        </div>
          {this.props.current_user?.isadmin ? <A_Button text="Создать трюк +" base="posts"/> : null}
        </div>  
       { this.props.current_user?.isadmin ? <Posts_Table categories={this.props.categories} posts={this.onFilterSearch(this.props.posts, this.state.filter, this.state.activeFilterID)}/> : 
       <div className="posts-grid">
        {this.onFilterSearch(this.props.posts, this.state.filter, this.state.activeFilterID).map(post => {
          return (
            <O_PostCard 
            post={post} 
            learned={this.props.favorited.filter(item => item.user_id === this.props.current_user?.id)}
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
