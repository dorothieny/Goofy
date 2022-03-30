import React from "react"
import PropTypes from "prop-types"
class A_Saved_Btn extends React.Component {
  render () {
    return (
      <React.Fragment>
       <div className="button-saved">
       <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2.48438" y="5.79785" width="45.6" height="42" rx="6" fill="#151921"/>
            <rect x="0.585938" y="1.49805" width="44.6" height="42.2" rx="5.5" fill="#F8F5F1"/>
            <path d="M11.5547 18.2227C11.5547 14.0979 11.5547 12.0355 12.7995 10.7541C14.0443 9.47266 16.0477 9.47266 20.0547 9.47266H25.7214C29.7283 9.47266 31.7318 9.47266 32.9766 10.7541C34.2214 12.0355 34.2214 14.0979 34.2214 18.2227V28.1796C34.2214 32.0927 34.2214 34.0493 33.0253 34.6477C31.8292 35.2461 30.3347 34.0373 27.3456 31.6197L26.389 30.846C24.7083 29.4866 23.868 28.8069 22.888 28.8069C21.9081 28.8069 21.0677 29.4866 19.387 30.846L18.4304 31.6197C15.4414 34.0373 13.9469 35.2461 12.7508 34.6477C11.5547 34.0493 11.5547 32.0927 11.5547 28.1796V18.2227Z" 
            fill={this.props.fillColor} stroke="#151921" stroke-width="2"/>
            <rect x="0.585938" y="1.49805" width="44.6" height="42.2" rx="5.5" stroke="#151921"/>
        </svg>
       </div>
      </React.Fragment>
    );
  }
}

export default A_Saved_Btn
