import React from 'react';
import { render } from 'react-dom';
import Helmet from 'react-helmet';


const coverStyle = {
  display: 'block',
  margin: 'auto'
};

const listStyle = {
  'text-align':'center',
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
const songList = tracks.map((list, i) =>
    <li className="list" style= {listStyle}
    key={"track_" + i}>
<span className="back" id={i + 1}>{list}
      </span>
    </li>);

  

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
      count: 0
    }
  }

  onClick(e) {
    this.setState({
      count: this.state.count + 1
    });

    alert('You are playing Track ' + e.target.id);
  }

  render() {
    return (<div>
      <ul onClick={this.onClick.bind(this)}>
              {songList}
            </ul>
            <p style={coverStyle}>Track Listens: {this.state.count}</p>
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
