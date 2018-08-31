import React from 'react';
import FaMusic from 'react-icons/lib/fa/music';

class RecommendationsListItem extends React.Component {

  render() {
    return (
      <li onClick={() => { this.props.getRecommendations(this.props.name)}}>
        <FaMusic className="fa-music"/>
        <h3>{this.props.name}</h3>
      </li>
    );
  }
}

export default RecommendationsListItem;
