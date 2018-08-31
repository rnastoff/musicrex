import React from 'react';
import Header from './Header';
import Container from './Container';

class Musicrex extends React.Component {

  constructor() {
    super();
    this.getRecommendations = this.getRecommendations.bind(this);
    this.state = {
      band: '',
      recommendations: [],
      error: ''
    };
  }

  getRecommendations = (band) => {
    const numberOfResults = 50;
    fetch(`https://tastedive.com/api/similar?q=${band}&limit=${numberOfResults}&info=1&k=308154-Test-7CWGEKQA`)
      .then(response => response.json())
      .then(data => {
        if (data.Similar.Info[0].Type === "unknown") {
          this.setState(() => ({ error: data.Similar.Info[0].Name }))
        }
        else {
          this.setState(() => ({
            band: data.Similar.Info[0],
            recommendations: data.Similar.Results,
            error: ''
          }));
        }
      }); //then
  } //getRecommendations

  componentDidMount() {
    this.getRecommendations("red hot chili peppers");
  }

  render() {
    return (
      <div>
        <Header
          getRecommendations={this.getRecommendations}/>
        <Container
          getRecommendations={this.getRecommendations}
          band={this.state.band}
          recommendations={this.state.recommendations}
          error={this.state.error}/>
      </div>
    )
  }
}

export default Musicrex;
