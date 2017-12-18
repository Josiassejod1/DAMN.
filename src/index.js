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
    <li style= {listStyle}
    key={"track_" + i}>{list}</li>);

const album =  <ul>{songList}</ul>

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
  render() {
    return album;
  }
}

class Album extends React.Component {
  render() {
    return (


    <div>
      <Cover/>
      <Artist/>
    </div>
    );
  }
}


render(<Album/>, document.getElementById('root'));
