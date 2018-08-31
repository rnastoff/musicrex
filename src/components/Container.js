import React from 'react';
import Band from './Band';
import RecommendationsList from './RecommendationsList';


class Container extends React.Component {
  render() {
    return (
      <div className="container">
        {this.props.error ? <div class="error">No results for {this.props.error}</div> : ""}
        <Band band={this.props.band}/>
        <RecommendationsList
          recommendations={this.props.recommendations}
          getRecommendations={this.props.getRecommendations} />
      </div>
    )
  }
}

export default Container;
