import React from 'react';
import RecommendationsListItem from './RecommendationsListItem';


class RecommendationsList extends React.Component {

  render() {
    return (
      <div className="recommendations">
        <h2 className="rec-title">Recommendations</h2>
        <ul className="rec-list">
        {this.props.recommendations.map((band) =>
          <RecommendationsListItem name={band.Name} getRecommendations={this.props.getRecommendations}/>)}
        </ul>
      </div>
    );
  }
}

export default RecommendationsList;
