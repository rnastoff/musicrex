import React from 'react';



class Band extends React.Component {

  trimDescription = () => {
    if (this.props.band.wTeaser) {
      const description = this.props.band.wTeaser;
      return description.slice(0,740) + "...";
    }
    //return description.slice(0,100);
  }

  render() {
    return (
      <div className="band">
        <h1 className="band-title">{this.props.band.Name}</h1>
        <div className="band-lower">
          <p className="band-description">
            {this.trimDescription()}
            {this.props.band.wUrl ? <a href={this.props.band.wUrl} target="_blank">Read More</a> : ""}
          </p>
          <div className="band-youtube">
            <iframe src={this.props.band.yUrl}></iframe>
          </div>
        </div>
      </div>
    );
  }
}




export default Band;
