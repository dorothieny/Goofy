import React from "react"
import PropTypes from "prop-types"
class O_PostCard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      image: props.post.image.url ? this.props.post.image.url : 'https://xsaramps.com/files/uploads/conflict.png',
    }
  } 
  render () {
    return (
      <React.Fragment>
        <div style= {{ borderRadius: '12px', overflow: 'hidden', cursor:'pointer', backgroundColor: 'transparent', color: '#222222', height: '375px' }}
        onClick={() => location.href = `http://127.0.0.1:3000/posts/${this.props.post.id}`}>
          <div style= {{ }}>
          <div style={{ backgroundImage: `url(${this.state.image})`, backgroundPosition: 'top center', backgroundSize: 'cover',height: '305px', backgroundRepeat: 'no-repeat', borderRadius: '12px' }} />
          <span>{this.props.post.title}</span>{this.props.category === 'Все' ? null : <button>{this.props.category}</button>}
          <h1>{this.props.post.metro}</h1>
          <p>{this.props.favorited != 0 ? `${this.props.favorited} скейтеров умеют` : 'Пока никто не умеет'}</p>
          <p>{this.props.learned.filter(item => item.post_id === this.props.post.id)[0] ? 'Выучен' : 'Не выучен'}</p>
          </div>
          </div>
      </React.Fragment>
    );
  }
}

export default O_PostCard
