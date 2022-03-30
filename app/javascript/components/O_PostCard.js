import React from "react"
import PropTypes from "prop-types"
import A_Tag from "./A_Tag";
class O_PostCard extends React.Component {
  constructor (props) {
    super(props);
  } 
  render () {
    return (
      <React.Fragment>
        <div 
        className="post-card-styled"
        onClick={() => location.href = `http://127.0.0.1:3000/posts/${this.props.post.id}`}>
          <div style= {{ }}>
          <div 
          className="post-image"
          style={{ backgroundImage: `url(${this.props.post.image?.url ? this.props.post?.image.url : 'https://xsaramps.com/files/uploads/conflict.png'})`}} />

          <div className="post-card-bottom">
            <div
            style={{ display: 'flex', flexDirection: 'column'}}>
            <h1>{this.props.post.title}</h1>
            <p>{this.props.favorited != 0 ? `${this.props.favorited} скейтеров умеют` : 'Пока никто не умеет'}</p>
          </div>
          <div
            style={{ display: 'flex'}}>
            {this.props.category === 'Все' ? null : <A_Tag text={this.props.category} color='#151921'
                                                                                      backgroundColor="transparent"
                                                                                      borderColor='#151921'/>}
            {this.props.learned?.filter(item => item.post_id === this.props.post.id)[0] ?  <A_Tag text='Выучен' color='#F8F5F1'
                                                                                      backgroundColor="#416552"
                                                                                      borderColor='transparent'/> : ''}
          </div>

          </div>
          </div>
          </div>
      </React.Fragment>
    );
  }
}

export default O_PostCard
