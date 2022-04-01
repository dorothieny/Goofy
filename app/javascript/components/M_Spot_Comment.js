import React from "react"
import PropTypes from "prop-types"
import img from '../../assets/images/mock-avatar.png'
class M_Spot_Comment extends React.Component {
  render () {
    console.log(this.props.commentator.avatar.question_thumb);
    return (
      <React.Fragment>
       <div 
       className="spot-comment">
       <div
        className="commenter-flex">

          <img src={this.props.commentator.avatar.question_thumb.url ? this.props.commentator.avatar.question_thumb.url : img} />
          <h1>{this.props.commentator.username}</h1>
          
          <p>{this.props.spot_comment.body}</p>
        </div>
       <p className="timestamp">2 ч</p>
         </div>
      </React.Fragment>
    );
  }
}

export default M_Spot_Comment
