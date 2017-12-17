import React from 'react';
import { render } from 'react-dom';
var tracks = ['BLOOD', 
          'DNA',
          'YAH',
          'ELEMENT',
          'LOYALTY',
          'PRIDE',
          'HUMBLE',
          'LUST',
          'XXX',
          'FEAR',
          'GOD',
          'DUCKWORTH'];
const songList = tracks.map((list, i) =>
    <li key={"track_" + i}>{list}</li>);

const album =  <ol>{songList}</ol>

class Artist extends React.Component {
  render() {
    return album;
  }
}


render(<Artist/>, document.getElementById('root'));
