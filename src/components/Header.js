import React from 'react';
import FaSearch from 'react-icons/lib/fa/search';



class Header extends React.Component {

  handleClick = (e) => {
    e.preventDefault();
    const band = e.target.searchName.value;
    if (band && band !== "Artist") {
      this.props.getRecommendations(band);
    }

  };

  render() {
    return (
      <header>
        <div className="header-container">
          <div className="header-title">MusicRex</div>
          <form onSubmit={this.handleClick}>
            <input type="text" defaultValue="Artist" name="searchName"/>
            <button>
              <FaSearch className="fa-search"/>
            </button>
          </form>
        </div>
      </header>
    )
  }
}

export default Header;
