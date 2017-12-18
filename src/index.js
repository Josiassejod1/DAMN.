import React from 'react';
import { render } from 'react-dom';
import Helmet from 'react-helmet';
import Sidebar from 'react-sidebar';



const coverStyle = {
  display: 'block',
  margin: 'auto'
};

const listStyle = {
  textAlign:'center',
  'list-style':'none'
}

const color = {
  'background':'white'
}



var tracks = ['BLOOD.', 
          'DNA.',
          'YAH.',
          'ELEMENT.',
          'LOYALTY.',
          'PRIDE.',
          'HUMBLE.',
          'LUST.',
          'XXX.',
          'FEAR.',
          'GOD.',
          'DUCKWORTH.'];

//This keeps track of the list order

  

//Kendrick 
var kendrick = {
  src: "http://s3.amazonaws.com/hiphopdx-production/2017/04/Kendrick-Lamar-DAMN-album-cover-featured-827x620.jpg",
  size: "150px"
}

class Cover extends React.Component {
  render() {
    return (
      <img 
      src={kendrick.src}
      width={kendrick.size}
      height={kendrick.size}
      style={coverStyle}
      />
    );
  }
}



class Artist extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      hover: 0
    }
  }

  onMouseEnter(e){
      this.setState({
        hover: this.state.hover + 1
      });
  }

  onClick(e) {
    if (e.target.id != "") {
    this.setState({
      count: this.state.count + 1
    });

    alert('You are playing Track ' + e.target.id + ': ' + e.target.textContent);
    }
  }
 

  render() {
    const songList = tracks.map((list, i) =>
      <li className="list" style={listStyle}
        key={"track_" + i}>
        <span className="back" id={i + 1} 
        onMouseEnter={this.onMouseEnter.bind(this)}>
          {list}
        </span>
      </li>);

    return (<div>
      <ul onClick={this.onClick.bind(this)}>
              {songList}
            </ul>
            <p style={coverStyle}>Plays: {this.state.count}</p>
            <p style={coverStyle}>Visits: {this.state.hover}</p>
            </div>
    )
  }
}

class Album extends React.Component {
  
  render() {
    return (
    <div>
      <Cover/>
      <Artist />
    </div>
    );
  }
}






render(<Album/>, document.getElementById('root'));
